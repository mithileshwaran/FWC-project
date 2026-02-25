// utils/sentiment.js
// Uses Hugging Face Inference API (free tier) for sentiment analysis
// Requires speech-to-text first (Web Speech API for transcript)

const HF_API_URL =
  "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest";
const HF_TOKEN = "YOUR_HF_TOKEN"; // Replace with your free Hugging Face token

/**
 * Analyse sentiment of a text string.
 * Returns: { label: 'positive'|'neutral'|'negative', score: number }
 */
export const analyzeSentiment = async (text) => {
  try {
    if (!HF_TOKEN || HF_TOKEN === "YOUR_HF_TOKEN") {
      return { label: "neutral", score: 0, skipped: true };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const data = await res.json();
    if (!Array.isArray(data) || !data[0]) throw new Error("Invalid response");
    // data[0] is array of {label, score}
    const sorted = [...data[0]].sort((a, b) => b.score - a.score);
    const top = sorted[0];
    const label = top.label.toLowerCase().includes("pos")
      ? "positive"
      : top.label.toLowerCase().includes("neg")
      ? "negative"
      : "neutral";
    return { label, score: top.score, raw: sorted };
  } catch (err) {
    console.error("Sentiment analysis failed:", err);
    return { label: "neutral", score: 0, error: err.message };
  }
};

/**
 * Use browser Web Speech API to transcribe a Blob/MediaStream.
 * Returns a Promise<string>.
 */
export const transcribeAudio = (audioBlob) => {
  return new Promise((resolve, reject) => {
    // Use SpeechRecognition if available
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      reject(new Error("SpeechRecognition not supported in this browser"));
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    // Play the blob audio so recognition can pick it up
    const url = URL.createObjectURL(audioBlob);
    const audio = new Audio(url);

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join(" ");
      resolve(transcript);
    };
    recognition.onerror = (e) => reject(e);
    audio.onplay = () => recognition.start();
    audio.play().catch(reject);
  });
};

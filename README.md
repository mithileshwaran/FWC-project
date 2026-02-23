# 🏛️ TN Land Registry Portal

A full-stack React + Firebase multi-step property registration system for Tamil Nadu.

---

## 📁 Project Structure

```
src/
├── firebase/
│   └── config.js              ← Firebase init (add your keys here)
├── hooks/
│   └── useAuth.js             ← Auth context (email+password, phone OTP)
├── utils/
│   ├── firestore.js           ← Firestore CRUD helpers
│   └── sentiment.js           ← Hugging Face sentiment + speech-to-text
├── components/
│   ├── UI.jsx                 ← Shared: Input, Button, Card, StepIndicator, FileUpload, Alert
│   ├── ProtectedRoute.jsx     ← Auth guard
│   └── VideoConsent.jsx       ← Recording + countdown + AI analysis
├── pages/
│   ├── AuthPage.jsx           ← Sign In / Sign Up / Phone OTP
│   ├── ProfilePage.jsx        ← Basic profile creation
│   ├── RegistrationTypePage.jsx ← Buyer or Seller choice
│   ├── BuyerDetails.jsx       ← 3-step buyer form
│   ├── SellerDetails.jsx      ← 4-step seller form (includes video)
│   ├── Dashboard.jsx          ← User dashboard
│   └── AdminDashboard.jsx     ← Registrar review panel
├── App.jsx                    ← Router
└── main.jsx                   ← Entry point
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

Edit `src/firebase/config.js` and replace placeholder values:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

**Enable in Firebase Console:**
- Authentication → Email/Password ✅
- Authentication → Phone ✅
- Firestore Database ✅
- Storage ✅

### 3. Configure Hugging Face (for sentiment analysis)

Edit `src/utils/sentiment.js`:
```js
const HF_TOKEN = "hf_your_token_here";
```
Get a free token at https://huggingface.co/settings/tokens

### 4. Run development server

```bash
npm run dev
```

Open http://localhost:5173

---

## 🔥 Firebase Firestore Collections

| Collection | Key    | Contents                              |
|------------|--------|---------------------------------------|
| `profiles` | uid    | name, email, mobile, dob, address     |
| `buyers`   | uid    | personal, property, docs URLs, verified |
| `sellers`  | uid    | personal, property, docs URLs, videoConsent, approvalStatus |

## 🗄️ Firebase Storage Structure

```
buyers/{uid}/
  id_proof
  address_proof
  property_docs

sellers/{uid}/
  id_proof
  property_docs
  consent_video.webm
```

---

## 🔐 Firestore Security Rules (recommended)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /profiles/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    match /buyers/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    match /sellers/{uid} {
      allow read, write: if request.auth.uid == uid;
      // Admins can read all sellers
      allow read: if request.auth.token.admin == true;
    }
  }
}
```

---

## 🗺️ App Routes

| Route                 | Page                     | Access    |
|-----------------------|--------------------------|-----------|
| `/`                   | AuthPage                 | Public    |
| `/profile`            | ProfilePage              | Protected |
| `/home`               | Dashboard                | Protected |
| `/registration-type`  | RegistrationTypePage     | Protected |
| `/buyer`              | BuyerDetails             | Protected |
| `/seller`             | SellerDetails            | Protected |
| `/dashboard`          | Dashboard                | Protected |
| `/admin`              | AdminDashboard           | Protected |

---

## 🌐 TNREGINET Integration

The `verifyWithTNREGINET()` function in `BuyerDetails.jsx` and `SellerDetails.jsx` is currently **simulated** (survey numbers starting with "TN" are marked verified).

To integrate the real API:
1. Request API access from https://tnreginet.gov.in
2. Replace the mock function with a real HTTP call to their endpoint
3. Pass survey number + land details for cross-verification

---

## 🎙️ Video Consent Flow (Sellers)

1. Seller confirms if they are the land owner (or selects relation type)
2. Camera preview starts
3. **3-2-1 countdown** before recording
4. Seller reads the consent script aloud (displayed on screen)
5. Recording is stopped manually or auto-stops at 60 seconds
6. Video is previewed for approval before submitting
7. Speech-to-text captures transcript (Web Speech API)
8. Hugging Face sentiment model analyses transcript
9. If **positive/neutral** → AI approved ✅
10. If **negative** → flagged for Registrar manual review ⚠️
11. Video uploaded to Firebase Storage

---

## 👤 Admin Access

Navigate to `/admin` while logged in as a registrar account.
The admin dashboard shows:
- All seller registrations
- AI sentiment labels
- Video links + transcripts
- Approve / Reject actions
- Filter by: All / Pending / Flagged / Approved / Rejected

---

## 📦 Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to Firebase Hosting, Vercel, or Netlify.

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Firebase** (Auth, Firestore, Storage)
- **React Router v6**
- **Tailwind CSS**
- **Hugging Face Inference API** (free tier sentiment)
- **Web Speech API** (browser-native transcription)

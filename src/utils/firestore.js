// utils/firestore.js
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/config";

// ── Profile ──────────────────────────────────────────────────────────────────
export const saveProfile = async (uid, data) => {
  await setDoc(doc(db, "profiles", uid), { ...data, updatedAt: serverTimestamp() }, { merge: true });
};

export const getProfile = async (uid) => {
  const snap = await getDoc(doc(db, "profiles", uid));
  return snap.exists() ? snap.data() : null;
};

// ── Buyer ─────────────────────────────────────────────────────────────────────
export const saveBuyer = async (uid, data) => {
  await setDoc(doc(db, "buyers", uid), { ...data, updatedAt: serverTimestamp() }, { merge: true });
};

export const getBuyer = async (uid) => {
  const snap = await getDoc(doc(db, "buyers", uid));
  return snap.exists() ? snap.data() : null;
};

// ── Seller ────────────────────────────────────────────────────────────────────
export const saveSeller = async (uid, data) => {
  await setDoc(doc(db, "sellers", uid), { ...data, updatedAt: serverTimestamp() }, { merge: true });
};

export const getSeller = async (uid) => {
  const snap = await getDoc(doc(db, "sellers", uid));
  return snap.exists() ? snap.data() : null;
};

// ── Storage upload ────────────────────────────────────────────────────────────
export const uploadFile = async (path, file, options = {}) => {
  const { retries = 1 } = options;
  const storageRef = ref(storage, path);

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      await new Promise((resolve, reject) => {
        const task = uploadBytesResumable(storageRef, file);
        task.on(
          "state_changed",
          undefined,
          (error) => reject(error),
          () => resolve()
        );
      });
      return getDownloadURL(storageRef);
    } catch (error) {
      const isRetryLimit = error?.code === "storage/retry-limit-exceeded";
      if (!isRetryLimit || attempt === retries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  }
};

// ── Verification status ───────────────────────────────────────────────────────
export const updateVerificationStatus = async (collection, uid, verified) => {
  await updateDoc(doc(db, collection, uid), {
    verified,
    verifiedAt: serverTimestamp(),
  });
};

// ── Video consent ─────────────────────────────────────────────────────────────
export const saveVideoConsent = async (uid, data) => {
  await setDoc(doc(db, "sellers", uid), { videoConsent: data }, { merge: true });
};

// ── Admin approval ────────────────────────────────────────────────────────────
export const updateApprovalStatus = async (uid, status, reviewedBy) => {
  await updateDoc(doc(db, "sellers", uid), {
    approvalStatus: status,
    reviewedBy,
    reviewedAt: serverTimestamp(),
  });
};

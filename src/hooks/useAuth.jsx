import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  applyActionCode,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext();

const getActionSettings = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "http://localhost:5173";
  return {
    url: `${origin}/auth`,
    handleCodeInApp: false,
  };
};

const friendlyAuthError = (err) => {
  const code = err?.code || "";
  if (code.includes("too-many-requests")) return "Too many attempts. Please wait 1-2 minutes and try again.";
  if (code.includes("invalid-email")) return "Invalid email format.";
  if (code.includes("user-not-found")) return "No account found with this email.";
  if (code.includes("network-request-failed")) return "Network issue. Please check internet and retry.";
  if (code.includes("unauthorized-continue-uri") || code.includes("invalid-continue-uri")) {
    return "OTP link domain not authorized. Add your site domain in Firebase Authentication > Authorized domains.";
  }
  return err?.message?.replace("Firebase: ", "") || "Authentication error.";
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const normalizeEmail = (email) => (email || "").trim().toLowerCase();

  const sendResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, normalizeEmail(email), getActionSettings());
    } catch (err) {
      throw new Error(friendlyAuthError(err));
    }
  };

  const verifyResetCode = async (code) => {
    try {
      return await verifyPasswordResetCode(auth, code);
    } catch (err) {
      throw new Error(friendlyAuthError(err));
    }
  };

  const resetPassword = async (code, newPassword) => {
    try {
      return await confirmPasswordReset(auth, code, newPassword);
    } catch (err) {
      throw new Error(friendlyAuthError(err));
    }
  };

  const sendEmailOtp = async () => {
    try {
      if (!auth.currentUser) throw new Error("Please sign in first.");
      await sendEmailVerification(auth.currentUser, getActionSettings());
    } catch (err) {
      throw new Error(friendlyAuthError(err));
    }
  };

  const verifyEmailOtp = async (code) => {
    try {
      await applyActionCode(auth, code);
      if (auth.currentUser) {
        await auth.currentUser.reload();
        setUser({ ...auth.currentUser });
      }
    } catch (err) {
      throw new Error(friendlyAuthError(err));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        signin,
        logout,
        sendResetEmail,
        verifyResetCode,
        resetPassword,
        sendEmailOtp,
        verifyEmailOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

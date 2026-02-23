// hooks/useAuth.js
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

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const sendResetEmail = (email) => sendPasswordResetEmail(auth, email);
  const verifyResetCode = (code) => verifyPasswordResetCode(auth, code);
  const resetPassword = (code, newPassword) =>
    confirmPasswordReset(auth, code, newPassword);
  const sendEmailOtp = () => {
    if (!auth.currentUser) throw new Error("Please sign in first.");
    return sendEmailVerification(auth.currentUser);
  };
  const verifyEmailOtp = async (code) => {
    await applyActionCode(auth, code);
    if (auth.currentUser) {
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
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

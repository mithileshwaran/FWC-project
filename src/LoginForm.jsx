import { useState } from "react";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => alert("Signup successful ✅"))
      .catch((err) => alert("Signup failed ❌: " + err.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => alert("Login successful ✅"))
      .catch((err) => alert("Login failed ❌: " + err.message));
  };

  const logout = () => {
    signOut(auth)
      .then(() => alert("Logged out ✅"))
      .catch((err) => alert("Logout failed ❌: " + err.message));
  };

  return (
    <div className="login-form flex flex-col gap-2 p-4 bg-slate-800 rounded-md w-80 mx-auto mt-10">
      <input
        type="email"
        placeholder="Email"
        className="input p-2 rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input p-2 rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2 mt-2">
        <button onClick={login} className="btn bg-blue-500 p-2 rounded flex-1">Login</button>
        <button onClick={signup} className="btn bg-green-500 p-2 rounded flex-1">Signup</button>
        <button onClick={logout} className="btn bg-red-500 p-2 rounded flex-1">Logout</button>
      </div>
    </div>
  );
}

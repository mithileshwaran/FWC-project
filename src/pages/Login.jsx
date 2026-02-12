import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful ✅");
        navigate("/dashboard");
      })
      .catch((err) => alert("Login failed ❌: " + err.message));
  };

 const handleSignup = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // Firebase unique user
      const db = getDatabase();          // Realtime Database instance

      // Save user info to database
      set(ref(db, "users/" + user.uid), {
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      alert("Signup successful ✅ and data saved in DB");
    })
    .catch((err) => alert("Signup failed ❌: " + err.message));
};

const handleLogout = () => {
  signOut(auth)
    .then(() => alert("Logged out ✅"))
    .catch((err) => alert("Logout failed ❌: " + err.message));
};


  return (
    <div className="w-full max-w-md">
      <Card>
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Faceless Registration System
            </h1>
            <p className="text-sm text-slate-500">
              Secure & Transparent Property Registration
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="officer@example.gov"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Official use only</span>
              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex gap-2 mt-2">
              <Button type="submit" className="flex-1 bg-blue-500">
                Login
              </Button>
              <Button
                type="button"
                onClick={handleSignup}
                className="flex-1 bg-green-500"
              >
                Signup
              </Button>
              <Button
                type="button"
                onClick={handleLogout}
                className="flex-1 bg-red-500"
              >
                Logout
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;

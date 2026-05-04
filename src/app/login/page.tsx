"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Hardcoded credentials (intentionally insecure)
const HARDCODED_EMAIL = "admin@testapp.com";
const HARDCODED_PASSWORD = "Test@1234";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

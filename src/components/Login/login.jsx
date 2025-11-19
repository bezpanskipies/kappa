// src/components/Login/Login.jsx
import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // tu później będzie fetch do backendu
    console.log("Logowanie:", { email, password });
    alert("Logowanie tymczasowo tylko w konsoli");
  };

  return (
    <section className="login-section">
      <h2>Logowanie</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Hasło:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Zaloguj się</button>
      </form>
    </section>
  );
}

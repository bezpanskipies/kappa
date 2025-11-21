// src/components/Login/login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth && useAuth(); // jeśli useAuth nie jest funkcją (np. undefined), auth będzie undefined
  const navigate = useNavigate && useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // tutaj zwykle robisz fetch do backendu; na razie mock:
    const mockUser = { name: "Marek", email, level: "N4" };

    // Bezpieczna obsługa: jeżeli auth istnieje, użyj login(); w przeciwnym razie ustaw lokalnie i nawiguj
    if (auth && typeof auth.login === "function") {
      auth.login(mockUser);
    } else {
      // fallback — pomocny przy debugu bez AuthProvider
      try {
        localStorage.setItem("kappa_user_debug", JSON.stringify(mockUser));
      } catch (e) {}
      console.warn(
        "AuthProvider unavailable — saved mock user to localStorage (debug)"
      );
    }

    if (navigate) {
      navigate("/dashboard");
    } else {
      // fallback: spróbuj zmusić przeładowanie strony, żeby zobaczyć dashboard manualnie
      // window.location.href = "/dashboard";
    }
  };

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Hasło
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="btn-primary">
          Zaloguj się
        </button>
      </form>
    </section>
  );
}

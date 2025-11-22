import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider"; // może być undefined w twoim setupie
import "./Login.css";

/**
 * Props:
 * - onLogin?: function(user)  // jeśli komponent używany jako strona (/login)
 *
 * Kompatybilny z:
 * - użyciem w /login (App przekazuje onLogin)
 * - użyciem w modalu Navbar (bez onLogin)
 * - z AuthProvider (jeśli masz)
 */
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useAuth może być undefined — obsługujemy defensywnie
  let auth;
  try {
    auth = useAuth && useAuth();
  } catch (e) {
    auth = undefined;
  }
  const navigate = useNavigate();

  const finalizeLogin = (userData) => {
    // 1) jeśli przekazano callback (np. strona /login) -> użyj go
    if (typeof onLogin === "function") {
      try {
        onLogin(userData);
      } catch (e) {
        console.warn("onLogin callback error:", e);
      }
    }

    // 2) jeśli masz AuthProvider -> użyj login()
    if (auth && typeof auth.login === "function") {
      try {
        auth.login(userData);
      } catch (e) {
        console.warn("auth.login error:", e);
      }
    }

    // 3) fallback: zapisz usera lokalnie (przydatne przy debugu)
    try {
      localStorage.setItem("kappa_user", JSON.stringify(userData));
    } catch (e) {}

    // 4) wyślij event globalny, żeby np. Navbar zamknął modal
    try {
      window.dispatchEvent(
        new CustomEvent("kappa:login", { detail: userData })
      );
    } catch (e) {}

    // 5) nawiguj do dashboardu
    try {
      navigate("/dashboard");
    } catch (e) {
      // jeśli navigate nie działa (brak Routera) to nic nie rób
      console.warn("navigate failed:", e);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // TU: w przyszłości: fetch('/api/login', { email, password })
    // Na razie: mock user (możesz zamienić na dane z formularza)
    const mockUser = {
      name: email ? email.split("@")[0] : "Użytkownik",
      email,
      level: "N4",
    };

    // prosta walidacja
    if (!email || !password) {
      alert("Wypełnij email i hasło (to tylko mock).");
      return;
    }

    // simuluj logowanie
    finalizeLogin(mockUser);
  };

  return (
    <section className="login-section" aria-label="Logowanie">
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </label>

        <label>
          Hasło
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>

        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <button type="submit" className="btn-primary">
            Zaloguj się
          </button>
          <button
            type="button"
            className="btn-outline"
            onClick={() => {
              // pomocnicze szybkie testowe zalogowanie
              const quick = {
                name: "TestUser",
                email: "test@kappa",
                level: "N5",
              };
              finalizeLogin(quick);
            }}
          >
            Szybkie logowanie
          </button>
        </div>
      </form>
    </section>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Komponenty
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Levels from "./components/levels/Levels";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login/login";
import Dashboard from "./components/dashboard/Dashboard";

/**
 * PrivateRoute — prosty wrapper, chroni dostęp do dashboardu
 */
function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "Użytkownik", level: "N5" });

  // Wczytaj usera z localStorage przy starcie (fallback debug key też sprawdzamy)
  useEffect(() => {
    try {
      const raw =
        localStorage.getItem("kappa_user") ||
        localStorage.getItem("kappa_user_debug");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.name) {
          setUser(parsed);
          setIsLoggedIn(true);
        }
      }
    } catch (e) {
      // nie przerywamy, tylko logujemy w konsoli
      console.warn("App: błąd przy wczytywaniu usera z localStorage", e);
    }
  }, []);

  // globalny handler — nasłuchiwanie eventu z Login.finalizeLogin
  useEffect(() => {
    const onGlobalLogin = (ev) => {
      const u = ev?.detail || null;
      if (u) {
        setUser(u);
        setIsLoggedIn(true);
        try {
          localStorage.setItem("kappa_user", JSON.stringify(u));
        } catch (e) {}
      }
    };
    window.addEventListener("kappa:login", onGlobalLogin);
    return () => window.removeEventListener("kappa:login", onGlobalLogin);
  }, []);

  // funkcja do obsługi logowania gdy Login (strona) wywoła onLogin
  const handleLogin = useCallback((userData) => {
    if (!userData) return;
    setUser(userData);
    setIsLoggedIn(true);
    try {
      localStorage.setItem("kappa_user", JSON.stringify(userData));
    } catch (e) {}
  }, []);

  // wylogowanie — czyścimy stan i localStorage, i przekierujemy na stronę główną
  const handleLogout = useCallback(() => {
    setUser({ name: "Użytkownik", level: "N5" });
    setIsLoggedIn(false);
    try {
      localStorage.removeItem("kappa_user");
      localStorage.removeItem("kappa_user_debug");
    } catch (e) {}
    // nawigacja bez hooka: użyj window.location (proste i pewne)
    window.location.href = "/";
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Navbar dostaje informacje o koncie i funkcję wylogowania (opcjonalnie użyjesz) */}
        <Navbar
          isLoggedIn={isLoggedIn}
          userName={user?.name}
          onLogout={handleLogout}
        />

        <main>
          <Routes>
            {/* Strona główna */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HowItWorks />
                  <Levels />
                  <Pricing />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Logowanie (strona) - przekazujemy onLogin */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            {/* Dashboard (chroniony) */}
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Dashboard user={user} />
                </PrivateRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

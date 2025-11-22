import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login/login"; // Twój komponent logowania

export default function Navbar({
  isLoggedIn = false,
  userName = "Użytkownik",
  onLogout = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const profileRef = useRef(null);

  const links = [
    { label: "Strona główna", href: "#home" },
    { label: "Poziomy", href: "#levels" },
    { label: "Jak to działa", href: "#how" },
    { label: "Cennik", href: "#pricing" },
    { label: "Kontakt", href: "#contact" },
  ];

  // zamykaj modal i hamburger przy zmianie URL (np. navigate("/dashboard"))
  useEffect(() => {
    setShowLogin(false);
    setOpen(false);
    setShowProfile(false);
  }, [location.pathname]);

  // nasłuch globalnego eventu kappa:login -> zamykamy modal
  useEffect(() => {
    const onLogin = () => setShowLogin(false);
    window.addEventListener("kappa:login", onLogin);
    return () => window.removeEventListener("kappa:login", onLogin);
  }, []);

  // close profile dropdown on outside click
  useEffect(() => {
    function handleDocClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="nav-inner container">
        <div className="nav-logo">
          <span>Kappa Nihongo</span>
        </div>

        <button
          className="nav-toggle"
          aria-label="menu"
          onClick={() => setOpen((s) => !s)}
        >
          <div className={`bar ${open ? "open" : ""}`} />
          <div className={`bar ${open ? "open" : ""}`} />
          <div className={`bar ${open ? "open" : ""}`} />
        </button>

        <div className={`nav-links ${open ? "show" : ""}`}>
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="nav-link__text">{l.label}</span>
              <motion.span
                className="underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.26 }}
              />
            </motion.a>
          ))}

          {/* login / profile area */}
          {!isLoggedIn ? (
            <button
              className="nav-link login-btn"
              onClick={() => setShowLogin(true)}
            >
              Zaloguj się
            </button>
          ) : (
            <div className="profile-wrap" ref={profileRef}>
              <button
                className="profile-pill"
                onClick={() => setShowProfile((s) => !s)}
                aria-expanded={showProfile}
                aria-haspopup="true"
              >
                <div className="avatar-sm">{(userName || "U").slice(0, 1)}</div>
                <div className="profile-text">
                  <div className="profile-name">{userName}</div>
                </div>
              </button>

              {showProfile && (
                <div className="profile-dropdown" role="menu">
                  <a href="/dashboard" className="profile-item" role="menuitem">
                    Moje konto
                  </a>
                  <a
                    href="/dashboard#progress"
                    className="profile-item"
                    role="menuitem"
                  >
                    Postępy
                  </a>
                  <button
                    className="profile-item profile-logout"
                    onClick={() => {
                      setShowProfile(false);
                      try {
                        onLogout();
                      } catch (e) {
                        // fallback
                        localStorage.removeItem("kappa_user");
                        window.location.href = "/";
                      }
                    }}
                  >
                    Wyloguj
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal logowania */}
      {showLogin && (
        <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login />
            <button
              className="modal-close"
              onClick={() => setShowLogin(false)}
              aria-label="Zamknij logowanie"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

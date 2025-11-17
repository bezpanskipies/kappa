import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

/**
 * Nowoczesny navbar z animacjami (Framer Motion).
 * - Logo (animowane przy hover)
 * - Linki (desktop) + CTA
 * - Hamburger -> slide-in menu (mobile) z AnimatePresence
 *
 * Dostosuj ścieżki routingu / onClick do swoich potrzeb.
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Start", href: "#home" },
    { id: "levels", label: "Poziomy", href: "#levels" },
    { id: "how", label: "Jak to działa", href: "#how" },
    { id: "pricing", label: "Cennik", href: "#pricing" },
    { id: "contact", label: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="kappa-nav" role="navigation" aria-label="Główna nawigacja">
      <div className="kappa-nav__inner container">
        {/* Logo / marka */}
        <a
          className="kappa-nav__brand"
          href="#home"
          aria-label="Kappa Nihongo — strona główna"
        >
          <motion.div
            className="kappa-nav__logo"
            whileHover={{ scale: 1.06, rotate: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Prostokątna placeholder-ikona — podmień na svg/obraz */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="24" cy="20" r="14" fill="#FF6B5A" />
              <rect x="6" y="30" width="36" height="8" rx="3" fill="#9B8CFF" />
            </svg>
          </motion.div>

          <div className="kappa-nav__title">
            <span className="brand-main">Kappa</span>
            <span className="brand-sub">Nihongo</span>
          </div>
        </a>

        {/* Desktop links + CTA */}
        <div className="kappa-nav__links">
          <ul
            className="kappa-nav__list"
            role="menubar"
            aria-label="Główne linki"
          >
            {links.map((l) => (
              <li key={l.id} className="kappa-nav__item" role="none">
                <a role="menuitem" href={l.href} className="kappa-nav__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="kappa-nav__ctas">
            <button
              className="btn btn--ghost"
              onClick={() => {
                // example action
                console.log("Zaloguj");
              }}
              aria-label="Zaloguj"
            >
              Zaloguj
            </button>

            <motion.button
              className="btn btn--primary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // example action
                console.log("Zacznij naukę — CTA");
              }}
              aria-label="Zacznij naukę"
            >
              Zacznij
            </motion.button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="kappa-nav__hamburger"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path
                fill="currentColor"
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                fill="currentColor"
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="kappa-nav__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <div className="kappa-nav__mobile-inner container">
              <ul className="kappa-nav__mobile-list" role="menu">
                {links.map((l) => (
                  <li key={l.id} role="none">
                    <a
                      role="menuitem"
                      href={l.href}
                      className="kappa-nav__mobile-link"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="kappa-nav__mobile-ctas">
                <button
                  className="btn btn--ghost"
                  onClick={() => {
                    setOpen(false);
                    console.log("Zaloguj");
                  }}
                >
                  Zaloguj
                </button>
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    setOpen(false);
                    console.log("Zacznij naukę");
                  }}
                >
                  Zacznij
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

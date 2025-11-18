import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Strona główna", href: "#home" },
    { label: "Poziomy", href: "#levels" },
    { label: "Jak to działa", href: "#how" },
    { label: "Cennik", href: "#pricing" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="nav-inner container">
        <div className="nav-logo">
          <span>Kappa Nihongo</span>
        </div>

        <button
          className="nav-toggle"
          aria-label="menu"
          onClick={() => setOpen(!open)}
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
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="nav-link__text">{l.label}</span>

              {/* Fancy Underline */}
              <motion.span
                className="underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.28 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

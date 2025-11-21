import React from "react";

export default function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <aside
      className={`dash-sidebar ${open ? "open" : ""}`}
      aria-hidden={!open && window.innerWidth < 840}
    >
      <div className="sidebar-inner">
        <div className="sidebar-logo">Kappa</div>

        <nav className="sidebar-nav" aria-label="Nawigacja użytkownika">
          <a href="#/dashboard" className="sidebar-link">
            Dashboard
          </a>
          <a href="#/lessons" className="sidebar-link">
            Lekcje
          </a>
          <a href="#/test" className="sidebar-link">
            Test poziomu
          </a>
          <a href="#/srs" className="sidebar-link">
            Powtórki
          </a>
          <a href="#/stats" className="sidebar-link">
            Statystyki
          </a>
          <a href="#/billing" className="sidebar-link">
            Subskrypcja
          </a>
          <a href="#/settings" className="sidebar-link">
            Ustawienia
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-ghost" onClick={onClose}>
            Zamknij
          </button>
        </div>
      </div>
    </aside>
  );
}

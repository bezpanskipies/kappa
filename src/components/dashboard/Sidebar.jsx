import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <aside className={`dash-sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-inner">
        <div className="sidebar-logo">Kappa</div>

        <nav className="sidebar-nav" aria-label="Nawigacja użytkownika">
          <NavLink to="/dashboard" className="sidebar-link" onClick={onClose}>
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/lessons"
            className="sidebar-link"
            onClick={onClose}
          >
            Lekcje
          </NavLink>

          <NavLink
            to="/dashboard/test"
            className="sidebar-link"
            onClick={onClose}
          >
            Test poziomu
          </NavLink>

          <NavLink
            to="/dashboard/srs"
            className="sidebar-link"
            onClick={onClose}
          >
            Powtórki
          </NavLink>

          <NavLink
            to="/dashboard/stats"
            className="sidebar-link"
            onClick={onClose}
          >
            Statystyki
          </NavLink>

          <NavLink
            to="/dashboard/billing"
            className="sidebar-link"
            onClick={onClose}
          >
            Subskrypcja
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className="sidebar-link"
            onClick={onClose}
          >
            Ustawienia
          </NavLink>
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

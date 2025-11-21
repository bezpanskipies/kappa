import React from "react";

export default function Topbar({ user, onMenuToggle }) {
  return (
    <header className="dash-topbar">
      <div className="topbar-left">
        <button
          className="topbar-menu"
          onClick={onMenuToggle}
          aria-label="Przełącz menu"
        >
          ☰
        </button>
        <div className="topbar-search">
          <input aria-label="Szukaj lekcji" placeholder="Szukaj lekcji..." />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn" aria-label="Powiadomienia">
          🔔
        </button>
        <div
          className="profile-pill"
          role="button"
          tabIndex={0}
          aria-label="Profil użytkownika"
        >
          <div className="avatar">{(user.name || "U").slice(0, 1)}</div>
          <div className="profile-info">
            <div className="profile-name">{user.name}</div>
            <div className="profile-level">{user.level}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

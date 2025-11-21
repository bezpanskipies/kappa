import React from "react";

export default function ProfileCard({
  user = { name: "Użytkownik", level: "N5" },
}) {
  return (
    <div className="card profile-card">
      <div className="profile-top">
        <div className="avatar-large">{(user.name || "U").slice(0, 1)}</div>
        <div>
          <div className="h3">{user.name}</div>
          <div className="muted">Poziom: {user.level}</div>
        </div>
      </div>

      <div
        className="profile-actions"
        style={{ marginTop: 12, display: "flex", gap: 8 }}
      >
        <button className="btn-outline">Edytuj profil</button>
        <button className="btn-primary">Ustaw cel</button>
      </div>
    </div>
  );
}

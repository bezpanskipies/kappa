import React from "react";

export default function RecentActivity({ items = null }) {
  const data = items || [
    { id: 1, text: "Ukończono: Lekcja Hiragana", time: "2 dni temu" },
    { id: 2, text: "Test poziomu — wynik: 72%", time: "5 dni temu" },
  ];

  return (
    <div className="card recent-activity">
      <h4>Ostatnia aktywność</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data.map((it) => (
          <li
            key={it.id}
            style={{
              padding: "8px 0",
              borderBottom: "1px dashed rgba(0,0,0,0.04)",
            }}
          >
            <div className="activity-text">{it.text}</div>
            <div className="muted small">{it.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

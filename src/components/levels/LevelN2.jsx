import React from "react";
import "./Levels.css";

export default function LevelN2() {
  return (
    <div
      className="level-card level-card--n2"
      role="article"
      aria-label="N2 Zaawansowany"
    >
      <div className="level-card__visual">
        <img src="/assets/levels/n2.png" alt="Ilustracja N2 — zaawansowany" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N2: Zaawansowany</h3>
        <p className="level-card__subtitle">Zaawansowany</p>
        <button
          className="level-card__btn"
          onClick={() => console.log("Zobacz plan N2")}
          aria-label="Zobacz plan N2"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

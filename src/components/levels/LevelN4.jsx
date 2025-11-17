import React from "react";
import "./Levels.css";

export default function LevelN4() {
  return (
    <div
      className="level-card level-card--n4"
      role="article"
      aria-label="N4 Podstawy"
    >
      <div className="level-card__visual">
        <img src="/assets/levels/n4.png" alt="Ilustracja N4 — podstawy" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N4: Podstawy</h3>
        <p className="level-card__subtitle">Podstawy</p>
        <button
          className="level-card__btn"
          onClick={() => console.log("Zobacz plan N4")}
          aria-label="Zobacz plan N4"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

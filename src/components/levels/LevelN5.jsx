import React from "react";
import "./Levels.css";
import uczenImage from "../../assets/uczen.png";

export default function LevelN5({ onOpen }) {
  return (
    <div
      className="level-card level-card--n5"
      role="article"
      aria-label="N5 Początki"
    >
      <div className="level-card__visual">
        <img src={uczenImage} alt="Ilustracja N5 — początki" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N5: Początki</h3>
        <p className="level-card__subtitle">Początki</p>
        <button
          className="level-card__btn"
          onClick={onOpen}
          aria-label="Zobacz plan N5"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./Levels.css";
import mistrzImage from "../../assets/mistrz.png";

export default function LevelN1() {
  return (
    <div
      className="level-card level-card--n1"
      role="article"
      aria-label="N1 Mistrz"
    >
      <div className="level-card__visual">
        <img src={mistrzImage} alt="Ilustracja N1 — mistrz" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N1: Mistrz</h3>
        <p className="level-card__subtitle">Mistrz</p>
        <button
          className="level-card__btn"
          onClick={() => console.log("Zobacz plan N1")}
          aria-label="Zobacz plan N1"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

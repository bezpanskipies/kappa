// src/components/levels/LevelN3.jsx
import React from "react";
import "./Levels.css";
import sredniImage from "../../assets/sredni.png";

export default function LevelN3({ onOpen }) {
  return (
    <div
      className="level-card level-card--n3"
      role="article"
      aria-label="N3 Średniozaawansowany"
    >
      <div className="level-card__visual">
        <img src={sredniImage} alt="Ilustracja N3" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N3: Średnio</h3>
        <p className="level-card__subtitle">Poszerzamy strukturę gramatyczną</p>
        <button
          className="level-card__btn"
          onClick={onOpen}
          aria-label="Zobacz plan N3"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

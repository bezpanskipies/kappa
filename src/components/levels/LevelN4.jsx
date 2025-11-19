// src/components/levels/LevelN4.jsx
import React from "react";
import "./Levels.css";
import pagodaImage from "../../assets/pagoda.png";

export default function LevelN4({ onOpen }) {
  return (
    <div
      className="level-card level-card--n4"
      role="article"
      aria-label="N4 Podstawy średniozaawansowane"
    >
      <div className="level-card__visual">
        <img src={pagodaImage} alt="Ilustracja N4" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N4: Podstawy+</h3>
        <p className="level-card__subtitle">Rozwijamy zdolność komunikacji</p>
        <button
          className="level-card__btn"
          onClick={onOpen}
          aria-label="Zobacz plan N4"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

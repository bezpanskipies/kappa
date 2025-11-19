// src/components/levels/LevelN1.jsx
import React from "react";
import "./Levels.css";
import mistrzImage from "../../assets/mistrz.png";

export default function LevelN1({ onOpen }) {
  return (
    <div
      className="level-card level-card--n1"
      role="article"
      aria-label="N1 Biegłość"
    >
      <div className="level-card__visual">
        <img src={mistrzImage} alt="Ilustracja N1" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N1: Biegłość</h3>
        <p className="level-card__subtitle">Płynność i niuanse językowe</p>
        <button
          className="level-card__btn"
          onClick={onOpen}
          aria-label="Zobacz plan N1"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

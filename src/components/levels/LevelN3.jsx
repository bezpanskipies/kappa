import React from "react";
import "./Levels.css";
import sredniImage from "../../assets/sredni.png";

export default function LevelN3() {
  return (
    <div
      className="level-card level-card--n3"
      role="article"
      aria-label="N3 Rozmowy codzienne"
    >
      <div className="level-card__visual">
        <img src={sredniImage} alt="Ilustracja N3 — rozmowy codzienne" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N3: Rozmowy codzienne</h3>
        <p className="level-card__subtitle">Rozmowy codzienne</p>
        <button
          className="level-card__btn"
          onClick={() => console.log("Zobacz plan N3")}
          aria-label="Zobacz plan N3"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

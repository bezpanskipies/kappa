import React from "react";
import "./Levels.css";
import doswiadczonyImage from "../../assets/doswiadczony.png";

export default function LevelN2({ onOpen }) {
  return (
    <div
      className="level-card level-card--n2"
      role="article"
      aria-label="N2 Zaawansowany"
    >
      <div className="level-card__visual">
        <img src={doswiadczonyImage} alt="Ilustracja N2" />
      </div>

      <div className="level-card__body">
        <h3 className="level-card__title">N2: Zaawansowany</h3>
        <p className="level-card__subtitle">Płynność i rozumienie kontekstów</p>
        <button
          className="level-card__btn"
          onClick={onOpen}
          aria-label="Zobacz plan N2"
        >
          Zobacz plan
        </button>
      </div>
    </div>
  );
}

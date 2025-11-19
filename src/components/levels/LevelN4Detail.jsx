// src/components/levels/LevelN4Detail.jsx
import React from "react";
import "./Levels.css";
import pagodaImage from "../../assets/pagoda.png";

export default function LevelN4Detail({ onClose }) {
  return (
    <section className="level-detail" aria-label="Plan nauki N4">
      <div className="level-detail__header">
        <h2>N4: Podstawy+</h2>
        <button
          onClick={onClose}
          className="level-detail__close"
          aria-label="Zamknij N4"
        >
          ✕
        </button>
      </div>

      <div className="level-detail__content">
        <div className="level-detail__visual">
          <img src={pagodaImage} alt="Ilustracja N4" />
        </div>

        <div className="level-detail__body">
          <h3>Zakres gramatyczny</h3>
          <ul>
            <li>Rozszerzenie partykuł (へ, から, まで, と…)</li>
            <li>Formy czasowników (て-form, potoczna forma た/て)</li>
            <li>Przymiotniki i ich stopniowanie</li>
            <li>Prostsze konstrukcje czasowe i łączniki</li>
          </ul>

          <h3>Plan lekcji (przykład)</h3>
          <ol>
            <li>Lekcja 1: Powtórka hiragany + katakana</li>
            <li>Lekcja 2: Rozszerzone partykuły i ich użycie</li>
            <li>Lekcja 3: て-form — łączenie zdań</li>
            <li>Lekcja 4: Przymiotniki i opis rzeczy</li>
            <li>Lekcja 5: Dialogi praktyczne i mini test</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

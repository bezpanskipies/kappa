// src/components/levels/LevelN1Detail.jsx
import React from "react";
import "./Levels.css";
import mistrzImage from "../../assets/mistrz.png";

export default function LevelN1Detail({ onClose }) {
  return (
    <section className="level-detail" aria-label="Plan nauki N1">
      <div className="level-detail__header">
        <h2>N1: Biegłość</h2>
        <button
          onClick={onClose}
          className="level-detail__close"
          aria-label="Zamknij N1"
        >
          ✕
        </button>
      </div>

      <div className="level-detail__content">
        <div className="level-detail__visual">
          <img src={mistrzImage} alt="Ilustracja N1" />
        </div>

        <div className="level-detail__body">
          <h3>Zakres gramatyczny</h3>
          <ul>
            <li>Zaawansowane struktury składniowe i semantyka</li>
            <li>Stylizacja tekstu, idiomy i kolokacje zaawansowane</li>
            <li>Analiza argumentacji i retoryka</li>
            <li>Praca z literaturą i artykułami naukowymi</li>
          </ul>

          <h3>Plan lekcji (przykład)</h3>
          <ol>
            <li>Lekcja 1: Idiomy i niuanse semantyczne</li>
            <li>Lekcja 2: Analiza języka w mediach i literaturze</li>
            <li>Lekcja 3: Retoryka i argumentacja po japońsku</li>
            <li>Lekcja 4: Przygotowanie do części czytania/listening N1</li>
            <li>Lekcja 5: Symulacja egzaminu i omówienie błędów</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

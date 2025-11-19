import React from "react";
import "./Levels.css";
import doswiadczonyImage from "../../assets/doswiadczony.png";

export default function LevelN2Detail({ onClose }) {
  return (
    <section className="level-detail" aria-label="Plan nauki N2">
      <div className="level-detail__header">
        <h2>N2: Zaawansowany</h2>
        <button
          onClick={onClose}
          className="level-detail__close"
          aria-label="Zamknij N2"
        >
          ✕
        </button>
      </div>

      <div className="level-detail__content">
        <div className="level-detail__visual">
          <img src={doswiadczonyImage} alt="Ilustracja N2" />
        </div>

        <div className="level-detail__body">
          <h3>Zakres gramatyczny</h3>
          <ul>
            <li>Złożone konstrukcje i bardziej złożona leksyka</li>
            <li>Subtelne niuanse znaczeniowe i kolokacje</li>
            <li>Formalne style i rejestry językowe</li>
            <li>Składnia w tekstach autentycznych</li>
          </ul>

          <h3>Plan lekcji (przykład)</h3>
          <ol>
            <li>Lekcja 1: Zaawansowane kolokacje i idiomy</li>
            <li>Lekcja 2: Rejestry językowe i formalność</li>
            <li>Lekcja 3: Analiza tekstów autentycznych</li>
            <li>Lekcja 4: Przygotowanie do części czytania N2</li>
            <li>Lekcja 5: Listening do tekstów natywnych</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

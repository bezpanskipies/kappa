import React from "react";
import "./Levels.css";
import uczenImage from "../../assets/uczen.png";

export default function LevelN5Detail({ onClose }) {
  return (
    <section className="level-detail" aria-label="Plan nauki N5">
      <div className="level-detail__header">
        <h2>N5: Początki</h2>
        <button
          onClick={onClose}
          className="level-detail__close"
          aria-label="Zamknij N5"
        >
          ✕
        </button>
      </div>

      <div className="level-detail__content">
        <div className="level-detail__visual">
          <img src={uczenImage} alt="Ilustracja N5 — początki" />
        </div>

        <div className="level-detail__body">
          <h3>Zakres gramatyczny</h3>
          <ul>
            <li>Podstawowe partykuły (は, が, を, で, に...)</li>
            <li>Proste zdania twierdzące, przeczące i pytające</li>
            <li>Podstawowe czasowniki w formie ~ます i ~ません</li>
            <li>Wyrażenia czasu, liczby, dni tygodnia</li>
          </ul>

          <h3>Plan lekcji</h3>
          <ol>
            <li>Lekcja 1: Wprowadzenie do hiragany</li>
            <li>Lekcja 2: Pierwsze zdania i partykuły</li>
            <li>Lekcja 3: Czasowniki w formie ~ます</li>
            <li>Lekcja 4: Liczby, dni tygodnia, proste pytania</li>
            <li>Lekcja 5: Powtórka i mini test</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

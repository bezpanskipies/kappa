import React from "react";
import "./Levels.css";
import sredniImage from "../../assets/sredni.png"; // poprawny import

export default function LevelN3Detail({ onClose }) {
  return (
    <section className="level-detail" aria-label="Plan nauki N3">
      <div className="level-detail__header">
        <h2>N3: Średnio</h2>
        <button
          onClick={onClose}
          className="level-detail__close"
          aria-label="Zamknij N3"
        >
          ✕
        </button>
      </div>

      <div className="level-detail__content">
        <div className="level-detail__visual">
          <img src={sredniImage} alt="Ilustracja N3" />{" "}
          {/* używamy sredni.png */}
        </div>

        <div className="level-detail__body">
          <h3>Zakres gramatyczny</h3>
          <ul>
            <li>Zaawansowane formy warunkowe (と, ば, たら)</li>
            <li>Tryby i niuanse: 〜ように, 〜ようだ, 〜らしい</li>
            <li>Złożone zdania podrzędne i spójniki</li>
            <li>Użycie formy biernej i sprawczej (受け身 / 使役)</li>
          </ul>

          <h3>Plan lekcji (przykład)</h3>
          <ol>
            <li>Lekcja 1: Formy warunkowe i przykłady</li>
            <li>Lekcja 2: Czasowniki w formie biernej i sprawczej</li>
            <li>Lekcja 3: Złożone konstrukcje zdaniowe</li>
            <li>Lekcja 4: Wyrażenia niuansujące znaczenie</li>
            <li>Lekcja 5: Test składniowy + listening</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

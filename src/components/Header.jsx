import React from "react";
import "./Header.css";

/**
 * Header / Hero component
 * - Nie linkuję obrazów — podmień src obrazka na swoje (np. /assets/hero-kappa.png).
 * - Przyciski mają placeholderowe onClick — podłącz routy lub scroll w Twojej aplikacji.
 */

export default function Header() {
  return (
    <header className="kappa-hero" role="banner">
      <div className="kappa-hero__content">
        <div className="kappa-hero__text">
          <h1 className="kappa-title">Dlaczego Kappa Nihongo?</h1>
          <p className="kappa-subtitle">
            Nauka języka japońskiego od N5 do N1 — skutecznie, nowocześnie i z
            uśmiechem!
          </p>

          <div className="kappa-hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => {
                // TODO: podłącz akcję (np. przejście do rejestracji)
                console.log("Zacznij naukę");
              }}
              aria-label="Zacznij naukę"
            >
              Zacznij naukę
            </button>

            <button
              className="btn btn--outline"
              onClick={() => {
                // TODO: podłącz przewinięcie do sekcji poziomów
                console.log("Zobacz poziomy");
              }}
              aria-label="Zobacz poziomy"
            >
              Zobacz poziomy
            </button>
          </div>
        </div>

        <div className="kappa-hero__visual" aria-hidden="false">
          {/* Podmień src na swój plik (lokalny lub z assets) */}
          <img
            src="/assets/hero-kappa.png"
            alt="Kappa maskotka i ilustracja Japonii"
            className="kappa-hero__img"
          />
        </div>
      </div>
    </header>
  );
}

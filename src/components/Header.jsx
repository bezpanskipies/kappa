import React from "react";
import "./Header.css";
import heroImage from "../assets/hero.jpeg";

export default function Header() {
  return (
    <header className="kappa-hero" role="banner" id="home">
      <div className="kappa-hero__content container">
        <div className="kappa-hero__visual" aria-hidden="true">
          <div className="kappa-hero__aura" />
          <img
            src={heroImage}
            alt="Maskotka Kappa"
            className="kappa-hero__img"
          />
        </div>

        <div className="kappa-hero__text">
          <h1 className="kappa-title">Dlaczego Kappa Nihongo?</h1>
          <p className="kappa-subtitle">
            Nauka języka japońskiego od N5 do N1 — skutecznie, nowocześnie i z
            uśmiechem!
          </p>

          <div className="kappa-hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => console.log("Zacznij naukę")}
            >
              Zacznij naukę
            </button>
            <button
              className="btn btn--outline"
              onClick={() =>
                document
                  .getElementById("levels")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Zobacz poziomy
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

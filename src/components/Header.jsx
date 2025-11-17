import React from "react";
import "./Header.css";
import heroImage from "../assets/hero.jpeg";

export default function Header() {
  return (
    <header className="kappa-hero" role="banner">
      <div className="kappa-hero__content">
        <div className="kappa-hero__visual">
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
            <button className="btn btn--primary">Zacznij naukę</button>
            <button className="btn btn--outline">Zobacz poziomy</button>
          </div>
        </div>
      </div>
    </header>
  );
}

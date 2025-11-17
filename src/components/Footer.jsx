import React, { useState } from "react";
import "./Footer.css";

/**
 * Footer — sitemap / newsletter / social / back-to-top
 * - Formularz newsletter tylko UI (onSubmit -> console.log)
 * - Przyciski social bez linków (podmień href)
 * - "Back to top" przewija płynnie do góry
 */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    console.log("Zapisz email do newslettera:", email);
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 2500);
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner container">
        <div className="footer-grid">
          {/* Logo + krótki opis */}
          <div className="footer-col footer-col--brand" aria-label="O nas">
            <div className="footer-brand">
              <div className="footer-brand__logo" aria-hidden="true">
                {/* Podmień SVG na własne logo jeśli chcesz */}
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="18" r="14" fill="#FF6B5A" />
                  <rect
                    x="6"
                    y="30"
                    width="36"
                    height="8"
                    rx="3"
                    fill="#9B8CFF"
                  />
                </svg>
              </div>

              <div className="footer-brand__text">
                <div className="brand-main">Kappa</div>
                <div className="brand-sub">Nihongo — ucz się z radością</div>
              </div>
            </div>

            <p className="footer-desc">
              Interaktywne kursy japońskiego od N5 do N1. Krótkie lekcje, SRS, i
              praktyka mówienia.
            </p>
          </div>

          {/* Sitemap / linki */}
          <nav
            className="footer-col footer-col--links"
            aria-label="Szybkie linki"
          >
            <h4 className="footer-heading">Szybkie linki</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Start</a>
              </li>
              <li>
                <a href="#levels">Poziomy</a>
              </li>
              <li>
                <a href="#how">Jak to działa</a>
              </li>
              <li>
                <a href="#pricing">Cennik</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </nav>

          {/* Kontakt krótko */}
          <div
            className="footer-col footer-col--contact"
            aria-label="Dane kontaktowe"
          >
            <h4 className="footer-heading">Kontakt</h4>
            <address className="footer-address">
              <div>ul. Japońska 7</div>
              <div>00-000 Warszawa</div>
              <div>
                tel. <a href="tel:+48123456789">+48 123 456 789</a>
              </div>
              <div>
                <a href="mailto:kontakt@kappanihongo.pl">
                  kontakt@kappanihongo.pl
                </a>
              </div>
            </address>

            <div className="footer-socials" aria-label="Social">
              <a
                className="social"
                href="#"
                aria-label="Instagram (otwiera w nowej karcie)"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                className="social"
                href="#"
                aria-label="Facebook (otwiera w nowej karcie)"
                rel="noreferrer"
              >
                FB
              </a>
              <a
                className="social"
                href="#"
                aria-label="YouTube (otwiera w nowej karcie)"
                rel="noreferrer"
              >
                YT
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="footer-col footer-col--newsletter"
            aria-label="Newsletter"
          >
            <h4 className="footer-heading">Dołącz do newslettera</h4>
            <p className="footer-news-lead">
              Dostawaj nowe lekcje, promocje i porady prosto na maila.
            </p>

            <form className="footer-news-form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="footer-email">
                Adres email
              </label>
              <input
                id="footer-email"
                type="email"
                className="footer-input"
                placeholder="twoj@adres.email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Adres email do newslettera"
              />
              <button
                type="submit"
                className="btn btn--primary footer-submit"
                aria-label="Zapisz do newslettera"
              >
                Zapisz
              </button>
            </form>

            {sent && (
              <div className="footer-news-ok" role="status">
                Dziękujemy — sprawdź skrzynkę!
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <small className="footer-copy">
            © {new Date().getFullYear()} Kappa Nihongo. Wszelkie prawa
            zastrzeżone.
          </small>

          <div className="footer-legal">
            <a href="#" className="footer-legal__link">
              Regulamin
            </a>
            <a href="#" className="footer-legal__link">
              Polityka prywatności
            </a>
          </div>

          <button
            className="footer-top"
            onClick={scrollTop}
            aria-label="Przewiń do góry"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

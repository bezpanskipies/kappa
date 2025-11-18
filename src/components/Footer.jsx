import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">Kappa Nihongo</h3>
          <p className="footer-desc">
            Ucz się japońskiego nowocześnie, skutecznie i z przyjemnością.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Nawigacja</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Strona główna</a>
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
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Kontakt</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:kontakt@kappa.jp">kontakt@kappa.jp</a>
            </li>
            <li>
              <a href="#">Polityka prywatności</a>
            </li>
            <li>
              <a href="#">Regulamin</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kappa Nihongo — Wszelkie prawa zastrzeżone
      </div>
    </footer>
  );
}

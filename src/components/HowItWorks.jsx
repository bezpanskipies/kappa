import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

// Twoje zdjęcie:
import naukaImage from "../assets/nauka.jpg";

/* Placeholder ikonek (później podmienisz na swoje SVG) */
const IconPlaceholder = ({ title }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="24" cy="20" r="12" fill="#FFB6A2" />
    <rect x="10" y="28" width="28" height="8" rx="4" fill="#9B8CFF" />
    <title>{title}</title>
  </svg>
);

const cards = [
  {
    id: "discover",
    title: "Wybierz poziom",
    text: "Dobierz plan pod swój poziom: N5 → N1. Krótkie lekcje, testy i powtórki.",
  },
  {
    id: "learn",
    title: "Ucz się krok po kroku",
    text: "Krótkie moduły z audio, native examples i ćwiczeniami praktycznymi.",
  },
  {
    id: "practice",
    title: "Trening i powtórki",
    text: "System powtórek SRS + mini testy sprawiają, że materiał zostaje z Tobą.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, ease: "easeOut", duration: 0.48 },
  }),
};

export default function HowItWorks() {
  return (
    <section className="how-section" id="how" aria-label="Jak to działa">
      <div className="how-section__inner container">
        <div className="how-grid">
          {/* LEWA STRONA */}
          <div className="how-grid__left">
            <h2 className="how-title">Jak to działa?</h2>
            <p className="how-lead">
              Krótkie lekcje, interaktywne ćwiczenia i system powtórek —
              wszystko zaprojektowane, żebyś uczył się szybko i efektywnie.
            </p>

            <div className="how-cards" role="list">
              {cards.map((c, i) => (
                <motion.article
                  className="how-card"
                  key={c.id}
                  role="listitem"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="how-card__icon">
                    <IconPlaceholder title={c.title} />
                  </div>

                  <div className="how-card__body">
                    <h3 className="how-card__title">{c.title}</h3>
                    <p className="how-card__text">{c.text}</p>
                    <button
                      className="how-card__cta"
                      onClick={() => console.log(c.id)}
                    >
                      Czytaj więcej
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* PRAWA STRONA — Twoje zdjęcie nauka.jpg */}
          <div className="how-grid__right">
            <div className="how-visual">
              <div className="how-visual__bg" />
              <img
                src={naukaImage}
                alt="Proces nauki — ilustracja"
                className="how-visual__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

/**
 * Sekcja "Jak to działa?"
 * - 3 kafelki z ikonami (podmień obrazy/ikony)
 * - duży obrazek ilustrujący proces
 * - responsywna: obrazek po prawej na desktop, nad kafelkami na mobile
 * - framer-motion dla delikatnego wejścia
 */

const cards = [
  {
    id: "discover",
    title: "Wybierz poziom",
    text: "Dobierz plan pod swój poziom: N5 → N1. Krótkie lekcje, testy i powtórki.",
    icon: "/public/rejestracja.png",
  },
  {
    id: "learn",
    title: "Ucz się krok po kroku",
    text: "Krótkie moduły z audio, native examples i ćwiczeniami praktycznymi.",
    icon: "/assets/how/learn.svg",
  },
  {
    id: "practice",
    title: "Trening i powtórki",
    text: "System powtórek SRS + mini testy sprawiają, że materiał zostaje z Tobą.",
    icon: "/assets/how/practice.svg",
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
          {/* Left: content (cards) */}
          <div className="how-grid__left">
            <h2 className="how-title">Jak to działa?</h2>
            <p className="how-lead">
              Krótkie lekcje, interaktywne ćwiczenia i system powtórek —
              wszystko zaprojektowane, żebyś uczył się szybko i efektywnie.
            </p>

            <div
              className="how-cards"
              role="list"
              aria-label="Kroki jak to działa"
            >
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
                  <div className="how-card__icon" aria-hidden="true">
                    <img src={c.icon} alt="" />
                  </div>

                  <div className="how-card__body">
                    <h3 className="how-card__title">{c.title}</h3>
                    <p className="how-card__text">{c.text}</p>
                    <button
                      className="how-card__cta"
                      onClick={() => console.log(`Czytaj więcej: ${c.id}`)}
                      aria-label={`Czytaj więcej o ${c.title}`}
                    >
                      Czytaj więcej
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right: illustrative image */}
          <div className="how-grid__right" aria-hidden="true">
            <div className="how-visual">
              <div className="how-visual__bg" />
              <img
                src="/assets/how/illustration.png"
                alt="Ilustracja procesu nauki"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./Pricing.css";

/**
 * Pricing — szkielety planów
 * - 3 karty: Basic / Pro / Premium
 * - przełącznik Monthly / Yearly (UI; możesz podpiąć logikę)
 * - miejsce na listę funkcji i CTA
 */

const plans = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: "0",
    priceYearly: "0",
    subtitle: "Dla początkujących",
    features: ["Dostęp do lekcji N5", "Podstawowe quizy", "Profil użytkownika"],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: "9.99",
    priceYearly: "99",
    subtitle: "Najlepszy wybór",
    features: ["Pełne kursy N5–N3", "SRS + statystyki", "Wsparcie mailowe"],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    priceMonthly: "19.99",
    priceYearly: "199",
    subtitle: "Dla ambitnych",
    features: ["Kursy N1–N2", "Lekcje konwersacyjne", "Konsultacje 1:1"],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  return (
    <section className="pricing-section" id="pricing" aria-label="Cennik">
      <div className="pricing-inner container">
        <header className="pricing-header">
          <h2 className="pricing-title">Cennik</h2>
          <p className="pricing-lead">
            Wybierz plan, który pasuje do Twojego tempa nauki. Zmieniaj billing,
            aby zobaczyć oszczędności przy płatnościach rocznych.
          </p>

          <div
            className="pricing-toggle"
            role="tablist"
            aria-label="Wybór rozliczenia"
          >
            <button
              className={`toggle-btn ${billing === "monthly" ? "active" : ""}`}
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              Miesięcznie
            </button>

            <div className="toggle-pill" aria-hidden="true">
              <div
                className={`toggle-indicator ${
                  billing === "yearly" ? "right" : "left"
                }`}
              />
            </div>

            <button
              className={`toggle-btn ${billing === "yearly" ? "active" : ""}`}
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
            >
              Rocznie
              <span className="toggle-savings"> (-20%)</span>
            </button>
          </div>
        </header>

        <div className="pricing-grid" role="list">
          {plans.map((plan) => {
            const price =
              billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
            const periodLabel = billing === "monthly" ? "mies." : "rok";

            return (
              <article
                className={`plan-card ${
                  plan.featured ? "plan-card--featured" : ""
                }`}
                key={plan.id}
                role="listitem"
                aria-label={`${plan.name} plan`}
              >
                {plan.featured && <div className="plan-badge">Polecany</div>}

                <div className="plan-card__head">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-sub">{plan.subtitle}</p>
                </div>

                <div className="plan-price">
                  <span className="plan-currency">€</span>
                  <span className="plan-amount">{price}</span>
                  <span className="plan-period">/{periodLabel}</span>
                </div>

                <ul className="plan-features" aria-hidden="false">
                  {plan.features.map((f, i) => (
                    <li key={i} className="plan-feature">
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="plan-cta">
                  <button
                    className={`btn ${
                      plan.featured ? "btn--primary" : "btn--outline"
                    }`}
                    onClick={() =>
                      console.log(`Wybierz plan: ${plan.id} (${billing})`)
                    }
                    aria-label={`Wybierz plan ${plan.name}`}
                  >
                    Wybierz plan
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="pricing-note">
          Wszystkie plany zawierają dostęp do darmowych aktualizacji kursów i
          aplikacji mobilnej.
        </p>
      </div>
    </section>
  );
}

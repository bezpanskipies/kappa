import React, { useState, useMemo } from "react";
import "./Pricing.css";

/**
 * Pricing.jsx — odświeżony wygląd + lepszy toggle billing
 *
 * Logika:
 * - plans[].priceMonthly — string lub number (np. "9.99" lub 9.99)
 * - plans[].priceYearly — opcjonalne; jeśli nie podane, liczymy: monthly * 12 * 0.8 (rabat 20%)
 *
 * UI:
 * - toggle (Miesięcznie / Rocznie) z animowaną wskazówką (keyboard accessible)
 * - "Za darmo" dla 0
 */

const rawPlans = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 0,
    // priceYearly omitted -> will be computed
    subtitle: "Dla początkujących",
    features: ["Dostęp do lekcji N5", "Podstawowe quizy", "Profil użytkownika"],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 9.99,
    priceYearly: 99,
    subtitle: "Najlepszy wybór",
    features: ["Pełne kursy N5–N3", "SRS + statystyki", "Wsparcie mailowe"],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    priceMonthly: 19.99,
    // priceYearly omitted -> will be computed (19.99*12*0.8 ≈ 191.90)
    subtitle: "Dla ambitnych",
    features: ["Kursy N1–N2", "Lekcje konwersacyjne", "Konsultacje 1:1"],
  },
];

function formatPriceRaw(amount) {
  if (amount === 0) return "Za darmo";
  // show with 2 decimals but trim .00
  const n = Number(amount);
  if (Number.isNaN(n)) return "-";
  return n % 1 === 0 ? `${n} €` : `${n.toFixed(2)} €`;
}

export default function Pricing() {
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  // Precompute displayed prices
  const plans = useMemo(() => {
    return rawPlans.map((p) => {
      const monthly = Number(p.priceMonthly || 0);
      const yearly =
        p.priceYearly !== undefined
          ? Number(p.priceYearly)
          : Math.round(monthly * 12 * 0.8 * 100) / 100; // -20% rounding to 2 decimals
      return { ...p, _monthly: monthly, _yearly: yearly };
    });
  }, []);

  const handleToggleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setBilling((b) => (b === "monthly" ? "yearly" : "monthly"));
    }
    if (e.key === "ArrowLeft") setBilling("monthly");
    if (e.key === "ArrowRight") setBilling("yearly");
  };

  return (
    <section className="pricing-section" id="pricing" aria-label="Cennik">
      <div className="pricing-inner container">
        <header className="pricing-header">
          <div>
            <h2 className="pricing-title">Cennik</h2>
            <p className="pricing-lead">
              Wybierz plan, który pasuje do Twojego tempa nauki. Pamiętaj —
              roczne rozliczenie oszczędza 20%.
            </p>
          </div>

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

            <div
              className="toggle-pill"
              role="switch"
              tabIndex="0"
              aria-checked={billing === "yearly"}
              onKeyDown={handleToggleKey}
              onClick={() =>
                setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))
              }
            >
              <div
                className={`toggle-indicator ${
                  billing === "yearly" ? "right" : "left"
                }`}
                aria-hidden="true"
              />
            </div>

            <button
              className={`toggle-btn ${billing === "yearly" ? "active" : ""}`}
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
            >
              Rocznie <span className="toggle-savings">(-20%)</span>
            </button>
          </div>
        </header>

        <div className="pricing-grid" role="list">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan._monthly : plan._yearly;
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

                <div className="plan-price" aria-hidden={price === 0}>
                  <span className="plan-currency">€</span>
                  <span className="plan-amount">
                    {price === 0
                      ? "0"
                      : billing === "monthly"
                      ? Number.isInteger(price)
                        ? price
                        : price.toFixed(2)
                      : Number.isInteger(price)
                      ? price
                      : price.toFixed(2)}
                  </span>
                  <span className="plan-period">/{periodLabel}</span>
                </div>

                {price === 0 && <div className="plan-free">Bezpłatny</div>}

                <ul className="plan-features" aria-hidden={false}>
                  {plan.features.map((f, i) => (
                    <li key={i} className="plan-feature">
                      <span className="feature-dot" aria-hidden="true">
                        •
                      </span>
                      <span>{f}</span>
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
                    {price === 0 ? "Rozpocznij darmowo" : "Wybierz plan"}
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

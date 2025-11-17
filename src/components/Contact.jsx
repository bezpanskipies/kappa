import React, { useState } from "react";
import "./Contact.css";

/**
 * Kontakt — szkic sekcji kontaktowej.
 * - Formularz (name, email, message) z prostą walidacją HTML5
 * - Kolumna z danymi kontaktowymi, socialami i miejscem na mapę
 * - Zamień placeholder mapy na embed Google Maps / Leaflet / statyczne zdjęcie
 */

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    // TODO: podłącz tutaj fetch/axios do twojego endpointu (np. /api/contact)
    // Na razie tylko mock:
    try {
      console.log("Wysyłam formularz:", form);
      // symulacja opóźnienia
      await new Promise((r) => setTimeout(r, 700));
      setStatus({ ok: true, message: "Wiadomość wysłana. Dzięki!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, message: "Coś poszło nie tak. Spróbuj później." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="contact" aria-label="Kontakt">
      <div className="contact-inner container">
        <div className="contact-grid">
          {/* LEFT - FORMULARZ */}
          <div className="contact-col contact-col--form">
            <h2 className="contact-title">Masz pytanie? Napisz do nas.</h2>
            <p className="contact-lead">
              Chętnie odpowiemy na pytania dotyczące kursów, planów i
              współpracy.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span className="field__label">Imię</span>
                <input
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={handleChange}
                  className="field__input"
                  placeholder="Twoje imię"
                  aria-label="Imię"
                />
              </label>

              <label className="field">
                <span className="field__label">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="field__input"
                  placeholder="twoj@adres.email"
                  aria-label="Adres email"
                />
              </label>

              <label className="field">
                <span className="field__label">Wiadomość</span>
                <textarea
                  name="message"
                  required
                  minLength={6}
                  value={form.message}
                  onChange={handleChange}
                  className="field__textarea"
                  placeholder="Napisz wiadomość..."
                  rows={6}
                  aria-label="Wiadomość"
                />
              </label>

              <div className="contact-form__actions">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={submitting}
                  aria-disabled={submitting}
                >
                  {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>

                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                >
                  Wyczyść
                </button>
              </div>

              {status && (
                <div
                  className={`contact-form__status ${status.ok ? "ok" : "err"}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* RIGHT - INFO + MAPA */}
          <aside
            className="contact-col contact-col--info"
            aria-label="Dane kontaktowe"
          >
            <div className="contact-info">
              <div className="contact-item">
                <svg
                  className="contact-item__icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-4 0-7.33 2-8 6h16c-.67-4-4-6-8-6z"
                  />
                </svg>
                <div>
                  <div className="contact-item__title">Biuro</div>
                  <div className="contact-item__text">
                    ul. Japońska 7, 00-000 Warszawa
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <svg
                  className="contact-item__icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.27 21 3 14.73 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.27.99l-2.18 2.23z"
                  />
                </svg>
                <div>
                  <div className="contact-item__title">Telefon</div>
                  <div className="contact-item__text">+48 123 456 789</div>
                </div>
              </div>

              <div className="contact-item">
                <svg
                  className="contact-item__icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"
                  />
                </svg>
                <div>
                  <div className="contact-item__title">Email</div>
                  <div className="contact-item__text">
                    kontakt@kappanihongo.pl
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <a className="social-btn" href="#" aria-label="Instagram">
                  {/* svg instagram */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM18.5 6a1 1 0 11-1 1 1 1 0 011-1z"
                    />
                  </svg>
                </a>
                <a className="social-btn" href="#" aria-label="Facebook">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M22 12a10 10 0 10-11.5 9.9v-7H8.9v-2.9h1.6V9.1c0-1.6 1-2.5 2.4-2.5.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.3h1.7l-.3 2.9h-1.4v7A10 10 0 0022 12z"
                    />
                  </svg>
                </a>
                <a className="social-btn" href="#" aria-label="YouTube">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M10 15l5.2-3L10 9v6zM21.6 7.2S21.2 6 20.3 5.7C19.1 5.3 12 5.3 12 5.3s-7.1 0-8.3.4C2.8 6 2.4 7.2 2.4 7.2S2 8.6 2 10v4c0 1.4.4 2.8.4 2.8s.4 1.2 1.3 1.6c1.2.4 8.3.4 8.3.4s7.1 0 8.3-.4c.9-.4 1.3-1.6 1.3-1.6S22 15.4 22 14V10c0-1.4-.4-2.8-.4-2.8z"
                    />
                  </svg>
                </a>
              </div>

              <div className="contact-map">
                {/* Placeholder: podmień na <iframe src="..."> lub komponent mapy */}
                <div className="contact-map__placeholder">
                  Mapa / embed tutaj
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

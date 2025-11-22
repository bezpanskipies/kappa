import React from "react";
import "./Lessons.css";

import heroImg from "../../assets/lesson1.png";
import mainichiImg from "../../assets/mainichi.jpg";
import hiraganaImg from "../../assets/uczen.png";
import dialogImg from "../../assets/nauka.jpg";
import kanjiImg from "../../assets/kanji.png";
import grammarImg from "../../assets/grammar.png";
import quizImg from "../../assets/quiz.png";
import profileIcon from "../../assets/doswiadczony.png";

export default function Lessons({
  user = { name: "Użytkownik", level: "N5" },
}) {
  return (
    <div className="lessons-root">
      <div className="lessons-header card">
        <div className="lessons-header-left">
          <div className="logo">
            KAPPA <span className="nihongo">NIHONGO</span>
          </div>
          <div className="level">Poziom {user.level}</div>
        </div>

        <div className="progress-block">
          <div className="progress-numbers">
            <div className="xp">120 XP</div>
            <div className="progress-percent small muted">
              Postęp: <strong>20%</strong>
            </div>
          </div>
          <div className="progress-bar small">
            <div className="progress-fill" style={{ width: "20%" }} />
          </div>
        </div>
      </div>

      <div className="home-grid lessons-grid">
        <div className="col col-left">
          <div className="card daily-card daily-with-image">
            <img src={mainichiImg} alt="Kappa" className="daily-image" />
            <div className="daily-content">
              <div className="daily-title">Codzienne wyzwanie</div>
              <div className="daily-jp">かいもの</div>
              <div className="daily-tags">
                <span className="tag">zakupy</span>
                <span className="tag">plecak</span>
                <span className="tag">biurko</span>
              </div>
            </div>
          </div>

          <div className="card small-card with-image">
            <div className="card-title">Hiragana i katakana</div>
            <img
              src={hiraganaImg}
              alt="Hiragana i katakana"
              className="tile-img"
            />
            <div className="muted small">Ukończono</div>
          </div>

          <div className="card small-card with-image">
            <div className="card-title">Dialogi</div>
            <img src={dialogImg} alt="Dialogi" className="tile-img" />
            <div className="muted small">Nie rozpoczęto</div>
          </div>
        </div>

        <div className="col col-center">
          <div className="card hero-card hero-with-image">
            <img src={heroImg} alt="Lekcja numer 1" className="hero-img" />
            <div className="hero-overlay">
              <h2 className="hero-title">Lekcja numer 1</h2>
              <p className="hero-sub">Słownictwo • Gramatyka • Dialog</p>
              <div className="hero-actions">
                <button className="btn-primary">Rozpocznij</button>
                <button className="btn-outline">Zobacz szczegóły</button>
              </div>
            </div>
          </div>

          <div className="next-lesson-highlight">
            <div className="title">Lekcja 1 — Zakupy</div>
            <div className="highlight-flex">
              <img src={heroImg} alt="Lekcja 1" className="next-lesson-img" />
              <div className="highlight-info">
                <div className="highlight-jp">Słownictwo: かいもの</div>
                <div className="muted small">
                  Dialog, ćwiczenia oraz krótki quiz.
                </div>
                <div className="highlight-actions">
                  <button className="btn-primary">Rozpocznij lekcję</button>
                  <button className="btn-outline">Podgląd</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row-tiles">
            <div className="tile large-tile">
              <img src={kanjiImg} alt="Kanji" className="tile-img" />
              <div className="tile-title">Kanji</div>
              <div className="small muted">15%</div>
            </div>

            <div className="tile large-tile">
              <img src={grammarImg} alt="Gramatyka" className="tile-img" />
              <div className="tile-title">Gramatyka</div>
              <div className="small muted">25%</div>
            </div>

            <div className="tile large-tile">
              <img src={quizImg} alt="Quizy" className="tile-img" />
              <div className="tile-title">Quizy</div>
              <div className="small muted">Nie rozpoczęto</div>
            </div>
          </div>
        </div>

        <div className="col col-right">
          <div className="card profile-card profile-top">
            <div className="avatar-large">
              <img src={profileIcon} alt="avatar" className="avatar-img" />
            </div>
            <div>
              <div className="strong">{user.name}</div>
              <div className="muted small">Poziom: {user.level}</div>
              <div className="progress-bar" style={{ marginTop: 8 }}>
                <div className="progress-fill" style={{ width: "20%" }} />
              </div>
            </div>
          </div>

          <div className="next-lesson-highlight" style={{ marginTop: 12 }}>
            <div className="title">Następna lekcja</div>
            <div className="muted small">Słownictwo: かいもの</div>
            <img
              src={heroImg}
              alt="Następna lekcja"
              className="next-lesson-img"
            />
            <button className="btn-primary" style={{ marginTop: 10 }}>
              Rozpocznij lekcję
            </button>
          </div>

          <div className="card recent-activity" style={{ marginTop: 12 }}>
            <div className="card-title">Ostatnia aktywność</div>
            <ul className="activity-list small muted">
              <li>Powtórka hiragany — 2 dni temu</li>
              <li>Quiz Kanji — 5 dni temu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

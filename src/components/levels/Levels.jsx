// src/components/Levels.jsx
import React, { useState } from "react";
import "./Levels.css";

/* Karty poziomów (komponenty kafelków) */
import LevelN5 from "./LevelN5";
import LevelN4 from "./LevelN4";
import LevelN3 from "./LevelN3";
import LevelN2 from "./LevelN2";
import LevelN1 from "./LevelN1";

/* Komponenty szczegółowe (detale poziomów) */
import LevelN5Detail from "./LevelN5Detail";
import LevelN4Detail from "./LevelN4Detail";
import LevelN3Detail from "./LevelN3Detail";
import LevelN2Detail from "./LevelN2Detail";
import LevelN1Detail from "./LevelN1Detail";

export default function Levels() {
  const [openLevel, setOpenLevel] = useState(null);

  const open = (id) => setOpenLevel(id);
  const close = () => setOpenLevel(null);

  return (
    <section className="levels-section" id="levels" aria-label="Poziomy nauki">
      <div className="levels-section__inner">
        <h2 className="levels-section__title">Poziomy nauki N5 - N1</h2>

        {/* Grid z kafelkami */}
        <div className="levels-grid" aria-hidden={!!openLevel}>
          <LevelN5 onOpen={() => open("N5")} />
          <LevelN4 onOpen={() => open("N4")} />
          <LevelN3 onOpen={() => open("N3")} />
          <LevelN2 onOpen={() => open("N2")} />
          <LevelN1 onOpen={() => open("N1")} />
        </div>

        {/* Sekcja detali — renderujemy tylko ten komponent, który jest otwarty */}
        {openLevel === "N5" && <LevelN5Detail onClose={close} />}
        {openLevel === "N4" && <LevelN4Detail onClose={close} />}
        {openLevel === "N3" && <LevelN3Detail onClose={close} />}
        {openLevel === "N2" && <LevelN2Detail onClose={close} />}
        {openLevel === "N1" && <LevelN1Detail onClose={close} />}
      </div>
    </section>
  );
}

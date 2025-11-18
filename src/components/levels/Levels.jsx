import React, { useState } from "react";
import "./Levels.css";

import LevelN5 from "./LevelN5";
import LevelN4 from "./LevelN4";
import LevelN3 from "./LevelN3";
import LevelN2 from "./LevelN2";
import LevelN1 from "./LevelN1";
import LevelN5Detail from "./LevelN5Detail";

export default function Levels() {
  const [openLevel, setOpenLevel] = useState(null);

  return (
    <section className="levels-section" id="levels" aria-label="Poziomy nauki">
      <div className="levels-section__inner">
        <h2 className="levels-section__title">Poziomy nauki N5 - N1</h2>

        <div className="levels-grid">
          <LevelN5 onOpen={() => setOpenLevel("N5")} />
          <LevelN4 />
          <LevelN3 />
          <LevelN2 />
          <LevelN1 />
        </div>

        {openLevel === "N5" && (
          <LevelN5Detail onClose={() => setOpenLevel(null)} />
        )}
      </div>
    </section>
  );
}

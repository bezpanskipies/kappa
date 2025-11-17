import React from "react";
import Header from "./components/Header";
import "./components/Header.css";

import Levels from "./components/levels/Levels";
import "./components/levels/Levels.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Levels />
      </main>
    </div>
  );
}

export default App;

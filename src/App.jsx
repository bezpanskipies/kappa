import React from "react";
import Header from "./components/Header";
import "./components/Header.css"; // Zmienione: usunięto /Header/

import Levels from "./components/levels/Levels";
import "./components/levels/Levels.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css"; // Zmienione: usunięto /Navbar/
import HowItWorks from "./components/HowItWorks";
import "./components/HowItWorks.css"; // Zmienione: usunięto /HowItWorks/
import Pricing from "./components/Pricing";
import "./components/Pricing.css"; // Zmienione: usunięto /Pricing/
import Contact from "./components/Contact";
import "./components/Contact.css"; // Zmienione: usunięto /Contact/
import Footer from "./components/Footer";
import "./components/Footer.css"; // Zmienione: usunięto /Footer/

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main>
        <HowItWorks />
        <Levels />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

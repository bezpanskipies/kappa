import React from "react";
import Header from "./components/Header";
import "./components/Header.css";

import Levels from "./components/levels/Levels";
import "./components/levels/Levels.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import HowItWorks from "./components/HowItWorks";
import "./components/HowItWorks.css";
import Pricing from "./components/Pricing";
import "./components/Pricing.css";
import Contact from "./components/Contact";
import "./components/Contact.css";
import Footer from "./components/Footer";
import "./components/Footer.css";

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

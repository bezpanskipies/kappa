import React from "react";
import Header from "./components/Header";

import Levels from "./components/levels/Levels";
import "./components/levels/Levels.css";
import Navbar from "./components/Navbar";

import HowItWorks from "./components/HowItWorks";

import Pricing from "./components/Pricing";

import Contact from "./components/Contact";

import Footer from "./components/Footer";

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

import React from "react";
import Header from "./components/Header";

import Levels from "./components/levels/Levels";

import Navbar from "./components/Navbar";

import HowItWorks from "./components/HowItWorks";

import Pricing from "./components/Pricing";

import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Login from "./components/Login/login";

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

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Komponenty
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Levels from "./components/levels/Levels";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login/login";
import Dashboard from "./components/dashboard/Dashboard";

// Prostą logikę auth można zastąpić później Contextem lub backendem
const fakeAuth = {
  isLoggedIn: false, // zmień na true aby testować dashboard
};

function PrivateRoute({ children }) {
  // Jeśli nie zalogowany, przekieruj na /login
  return fakeAuth.isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Strona główna */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HowItWorks />
                  <Levels />
                  <Pricing />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Logowanie */}
            <Route path="/login" element={<Login />} />

            {/* Dashboard — dostęp tylko jeśli zalogowany */}
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            {/* Fallback — przekierowanie na / jeśli nic nie pasuje */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

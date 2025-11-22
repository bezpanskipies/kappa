// components/dashboard/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHome from "./DashboardHome";
import Lessons from "./Lessons";

/**
 * Dashboard — wrapper layout. Przyjmuje `user` jako prop (możesz go podpiąć z Context).
 * Użyj w App.js lub pod ścieżką /dashboard po zalogowaniu.
 */
export default function Dashboard({
  user = { name: "Użytkownik", level: "N5" },
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Zamykamy sidebar na mobile po każdej zmianie trasy (przydatne gdy użytkownik wybiera link)
  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // zamknij sidebar gdy ścieżka się zmieni

  return (
    <div className="dashboard-root">
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="dashboard-main">
        <Topbar user={user} onMenuToggle={() => setMobileOpen((s) => !s)} />
        <main
          className="dashboard-content"
          id="dashboard-content"
          tabIndex={-1}
        >
          <Routes>
            {/* index -> /dashboard */}
            <Route index element={<DashboardHome user={user} />} />

            {/* lekcje -> /dashboard/lessons */}
            <Route path="lessons" element={<Lessons user={user} />} />

            {/* Przydatne: możesz dopisać kolejne podstrony tutaj, np.
                <Route path="stats" element={<Stats user={user} />} />
            */}

            {/* Fallback wewnątrz dashboard — przekieruj na stronę główną dashboardu */}
            <Route path="*" element={<DashboardHome user={user} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHome from "./DashboardHome";

/**
 * Dashboard — wrapper layout. Przyjmuje `user` jako prop (możesz go podpiąć z Context).
 * Użyj w App.js lub pod ścieżką /app po zalogowaniu.
 */
export default function Dashboard({
  user = { name: "Użytkownik", level: "N5" },
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <DashboardHome user={user} />
        </main>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppLogo, TopRightActions } from "../../components";
import smarqLogo from "../../assets/logo/SMARQLogo.png";
import { DASHBOARD_SECTIONS } from "./api";
import "./DashboardLayout.css";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    ...DASHBOARD_SECTIONS.map((s) => ({ to: s.to, label: s.label })),
  ];

  return (
    <div className="dashboard-layout">
      <aside
        className={`dashboard-sidebar ${sidebarOpen ? "dashboard-sidebar--open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="dashboard-sidebar__inner">
          <AppLogo logoSrc={smarqLogo} alt="Smarq" />
          <nav className="dashboard-sidebar__nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `dashboard-sidebar__link ${isActive ? "dashboard-sidebar__link--active" : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          type="button"
          className="dashboard-sidebar__close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          ×
        </button>
      </aside>
      <div
        className="dashboard-sidebar__backdrop"
        aria-hidden
        onClick={() => setSidebarOpen(false)}
      />
      <div className="dashboard-main">
        <header className="dashboard-header" role="banner">
          <button
            type="button"
            className="dashboard-header__menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <TopRightActions />
        </header>
        <main className="dashboard-content" role="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

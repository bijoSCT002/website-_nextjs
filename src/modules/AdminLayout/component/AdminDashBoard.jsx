import React from "react";
import "./styles/AdminDashboard.css";
import { DashboardCard } from "shared";
import { DASHBOARD_SECTIONS } from "..";

export function AdminDashboard() {
  return (
    <main
      className="theme-page-gradient theme-text min-h-screen"
      role="main"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight theme-text sm:text-4xl">
            Admin Dashboard
          </h1>
          <p className="mt-1 theme-text-muted">Choose a section to get started</p>
        </header>

        <nav
          className="dashboard-hub-grid"
          aria-label="Dashboard sections"
        >
          {DASHBOARD_SECTIONS?.map((section) => (
            <DashboardCard
              key={section.id}
              to={section.to}
              label={section.label}
              description={section.description}
              isPrimary={section.isPrimary}
              gridArea={section.gridArea}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}

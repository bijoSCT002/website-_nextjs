import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AdminDashboard, DashboardLayout } from "./modules";
import { AppLogo, TopRightActions, ErrorBoundary } from "./components";
import smarqLogo from "./assets/logo/SMARQLogo.png";

const SmarqLayout = lazy(() =>
  import("./modules/smarq/layouts").then((m) => ({ default: m.SmarqLayout }))
);
const ProjectListContainer = lazy(() =>
  import("./modules/smarq/features/project-list/container/ProjectListContainer").then((m) => ({ default: m.ProjectListContainer }))
);
const ArchivedProjectsContainer = lazy(() =>
  import("./modules/smarq/features/project-list/features/archive/container/ArchivedProjectsContainer").then((m) => ({ default: m.ArchivedProjectsContainer }))
);
const ProjectDetailContainer = lazy(() =>
  import("./modules/smarq/features/project-detail/container/ProjectDetailContainer").then((m) => ({ default: m.ProjectDetailContainer }))
);
const ProjectSettingsContainer = lazy(() =>
  import("./modules/smarq/features/project-settings/container/ProjectSettingsContainer").then((m) => ({ default: m.ProjectSettingsContainer }))
);
const Smiley = lazy(() =>
  import("./modules/smiley/Smiley").then((m) => ({ default: m.Smiley }))
);
const SettingMain = lazy(() =>
  import("./modules/smrSettings/SettingMain").then((m) => ({ default: m.SettingMain }))
);
const PackagesMain = lazy(() =>
  import("./modules/package/PackagesMain").then((m) => ({ default: m.PackagesMain }))
);
const SupportMain = lazy(() =>
  import("./modules/support/SupportMain").then((m) => ({ default: m.SupportMain }))
);

function RouteFallback() {
  return (
    <div
      className="theme-app flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <span className="theme-text-muted text-lg">Loading…</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Suspense fallback={<RouteFallback />}>
      <div className="theme-app">
        {!isHome && (
          <header className="top-bar" role="banner">
            <AppLogo logoSrc={smarqLogo} alt="Smarq" />
            <TopRightActions />
          </header>
        )}
        <div className={isHome ? "" : "pt-12"}>
          <ErrorBoundary>
          <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="/smarq" element={<SmarqLayout />}>
          <Route index element={<ProjectListContainer />} />
          <Route path="archive" element={<ArchivedProjectsContainer />} />
          <Route path="projects/:projectId" element={<ProjectDetailContainer />} />
          <Route path="projects/:projectId/settings" element={<ProjectSettingsContainer />} />
        </Route>
        <Route path="/smiley" element={<Smiley />} />
        <Route path="/setting" element={<SettingMain />} />
        <Route path="/packages" element={<PackagesMain />} />
        <Route path="/support" element={<SupportMain />} />
        <Route path="/Support" element={<Navigate to="/support" replace />} />
        <Route path="*" element={<div className="p-8">404 Not Found</div>} />
          </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </Suspense>
  );
}

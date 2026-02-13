import React from "react";
import {
  ProjectHubHeader,
  ProjectListPanel,
  ArchiveSection,
  UtilityBar,
  RecentlyViewed,
  ProjectList,
} from "../components";
import "../styles/SmarqProjectHub.css";

/** Presentational – pure UI, receives all data via props */
export function SmarqMain({
  searchQuery,
  onSearchChange,
  selectedId,
  onSelectProject,
  loading,
  filteredProjects,
  projects,
  recentIds,
  recentlyViewed,
}) {
  return (
    <main className="smarq-hub smarq-hub--industrial theme-page-gradient-simple theme-text flex min-h-screen flex-col">
      <div className="smarq-hub__inner flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectHubHeader />

          <div className="project-hub-main mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
            <ProjectListPanel
              searchValue={searchQuery}
              onSearchChange={onSearchChange}
              projects={filteredProjects}
              selectedId={selectedId}
              onSelectProject={onSelectProject}
              loading={loading}
            />

            <div className="smarq-hub__content flex min-w-0 flex-col">
              <RecentlyViewed recentlyViewed={recentlyViewed} />
              <ProjectList projects={projects} recentIds={recentIds} />
              <ArchiveSection />
            </div>
          </div>
        </div>
      </div>
      <UtilityBar />
    </main>
  );
}

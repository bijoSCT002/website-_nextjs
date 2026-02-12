import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getProjects,
  getRecentlyViewedIds,
  filterProjectsByName,
} from "./data/projectsData";
import {
  ProjectHubHeader,
  ProjectListPanel,
  ProjectCard,
  CreateProjectCard,
  ArchiveSection,
  UtilityBar,
} from "./components";
import "./styles/SmarqProjectHub.css";

export function SmarqMain() {
  const location = useLocation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [recentIds, setRecentIds] = useState([]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const refreshRecent = () => setRecentIds(getRecentlyViewedIds());
    refreshRecent();
    const onRecentUpdated = () => refreshRecent();
    window.addEventListener("smarq:recentViewedUpdated", onRecentUpdated);
    document.addEventListener("visibilitychange", refreshRecent);
    return () => {
      window.removeEventListener("smarq:recentViewedUpdated", onRecentUpdated);
      document.removeEventListener("visibilitychange", refreshRecent);
    };
  }, [location.pathname]);

  const filteredForList = filterProjectsByName(projects, searchQuery);

  const mid = Math.ceil(projects.length / 2);
  const row1Projects = projects.slice(0, mid);
  const row2Projects = projects.slice(mid);
  const recentlyViewed = recentIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <main className="smarq-hub smarq-hub--industrial theme-page-gradient-simple theme-text flex min-h-screen flex-col">
      <div className="smarq-hub__inner flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectHubHeader />

          <div className="project-hub-main mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
            <ProjectListPanel
              searchValue={searchQuery}
              onSearchChange={setSearchQuery}
              projects={filteredForList}
              selectedId={selectedId}
              onSelectProject={setSelectedId}
              loading={loading}
            />

            <div className="smarq-hub__content flex min-w-0 flex-col">
              <section
                className="smarq-hub__section"
                aria-labelledby="recently-viewed-heading"
              >
                <h2 id="recently-viewed-heading" className="smarq-hub__section-title">
                  Recently Viewed
                </h2>
                <div className="smarq-scroll-row__track" role="list" aria-label="Recently viewed projects">
                  {recentlyViewed.length > 0 ? (
                    recentlyViewed.map((project) => (
                      <div key={project.id} className="smarq-scroll-row__item" role="listitem">
                        <ProjectCard project={project} isRecent />
                      </div>
                    ))
                  ) : (
                    <div
                      className="smarq-scroll-row__item smarq-scroll-row__item--empty"
                      role="listitem"
                    >
                      <span className="text-sm text-slate-500">No recently viewed projects</span>
                    </div>
                  )}
                </div>
              </section>

              <section
                className="smarq-hub__section"
                aria-labelledby="projects-heading"
              >
                <h2 id="projects-heading" className="smarq-hub__section-title">
                  Projects
                </h2>
                <div className="scroll-projects" role="group" aria-label="Projects">
                  <div className="scroll-projects__track">
                    <div className="scroll-projects__row" role="list" aria-label="Projects row 1">
                      <div className="smarq-scroll-row__item" role="listitem">
                        <CreateProjectCard />
                      </div>
                      {row1Projects.map((project) => (
                        <div key={project.id} className="smarq-scroll-row__item" role="listitem">
                          <ProjectCard
                            project={project}
                            isRecent={recentIds.includes(project.id)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="scroll-projects__row" role="list" aria-label="Projects row 2">
                      {row2Projects.map((project) => (
                        <div key={project.id} className="smarq-scroll-row__item" role="listitem">
                          <ProjectCard
                            project={project}
                            isRecent={recentIds.includes(project.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <ArchiveSection />
            </div>
          </div>
        </div>
      </div>      <UtilityBar />
    </main>
  );
}

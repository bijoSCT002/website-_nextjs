/**
 * Project hub data and helpers. Mock data lives here, not in UI components.
 */

export const PROJECT_STATUS = {
  ACTIVE: "Active",
  ARCHIVED: "Archived",
  DRAFT: "Draft",
};

const MOCK_PROJECTS = [
  { id: "1", name: "Sentiment Pipeline", status: PROJECT_STATUS.ACTIVE, owner: "Platform Team" },
  { id: "2", name: "NLP Models v2", status: PROJECT_STATUS.ACTIVE, owner: "ML Team" },
  { id: "3", name: "Legacy Migration", status: PROJECT_STATUS.DRAFT, owner: "DevOps" },
  { id: "4", name: "API Gateway", status: PROJECT_STATUS.ACTIVE, owner: "Backend Team" },
  { id: "5", name: "Dashboard Redesign", status: PROJECT_STATUS.ARCHIVED, owner: "Frontend" },
  { id: "6", name: "Data Ingestion", status: PROJECT_STATUS.ACTIVE, owner: "Data Team" },
  { id: "7", name: "Auth Service", status: PROJECT_STATUS.DRAFT, owner: "Platform Team" },
  { id: "8", name: "Monitoring Stack", status: PROJECT_STATUS.ACTIVE, owner: "DevOps" },
];

/** Returns all projects (simulate API). */
export function getProjects() {
  return Promise.resolve([...MOCK_PROJECTS]);
}

const RECENTLY_VIEWED_KEY = "smarq-recently-viewed-v2";
const RECENTLY_VIEWED_MAX = 10;

/** Returns IDs of recently viewed projects (from localStorage, most recent first). Only user-viewed projects; no static/seed data. */
export function getRecentlyViewedIds() {
  try {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
    if (!stored) return [];
    const ids = JSON.parse(stored);
    if (!Array.isArray(ids)) return [];
    return ids.filter((id) => typeof id === "string" && id.trim() !== "");
  } catch {
    return [];
  }
}

/** Records a project view and persists to localStorage. Most recent first, capped at RECENTLY_VIEWED_MAX. */
export function recordProjectView(projectId) {
  if (!projectId) return;
  try {
    const ids = getRecentlyViewedIds();
    const filtered = ids.filter((id) => id !== projectId);
    const updated = [projectId, ...filtered].slice(0, RECENTLY_VIEWED_MAX);
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("smarq:recentViewedUpdated", { detail: { projectId } }));
  } catch {
    // ignore storage errors
  }
}

/** Filter projects by name (case-insensitive). */
export function filterProjectsByName(projects, query) {
  if (!query || !query.trim()) return projects;
  const q = query.trim().toLowerCase();
  return projects.filter((p) => p.name.toLowerCase().includes(q));
}

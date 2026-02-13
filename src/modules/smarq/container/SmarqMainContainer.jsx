import React from "react";
import { useRecentlyViewed } from "../hooks";
import { SmarqMain } from "./SmarqMain";

/** Container – holds all data logic, state, hooks; passes to presentational SmarqMain */
export function SmarqMainContainer() {
  const {
    searchQuery,
    setSearchQuery,
    selectedId,
    setSelectedId,
    loading,
    filterProjectsByName,
    projects,
    recentIds,
    recentlyViewed,
  } = useRecentlyViewed();

  const filteredForList = filterProjectsByName(projects, searchQuery);

  return (
    <SmarqMain
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedId={selectedId}
      onSelectProject={setSelectedId}
      loading={loading}
      filteredProjects={filteredForList}
      projects={projects}
      recentIds={recentIds}
      recentlyViewed={recentlyViewed}
    />
  );
}

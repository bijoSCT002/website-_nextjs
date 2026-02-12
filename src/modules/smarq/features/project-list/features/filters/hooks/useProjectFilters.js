/** Dummy hook – project filters */

import { useState, useMemo } from "react";

export function useProjectFilters(projects = []) {
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list = [...projects];
    if (statusFilter) {
      list = list.filter((p) => p.status === statusFilter);
    }
    if (searchQuery?.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((p) => p.name?.toLowerCase().includes(q));
    }
    return list;
  }, [projects, statusFilter, searchQuery]);

  return {
    filtered,
    statusFilter,
    setStatusFilter,
    searchQuery,
    setSearchQuery,
  };
}

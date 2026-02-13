import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {
    getProjects,
    getRecentlyViewedIds, filterProjectsByName
} from "../data/projectsData";

export const useRecentlyViewed = () => {
    const location = useLocation();
    const [recentIds, setRecentIds] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);

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

    const recentlyViewed = recentIds
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean);

    return { recentlyViewed, recentIds, projects, searchQuery, setSearchQuery, selectedId, setSelectedId, loading, filterProjectsByName };
};

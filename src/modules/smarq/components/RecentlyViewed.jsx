import React from "react";
import { ProjectCard } from "./ProjectCard";

export const RecentlyViewed = ({ recentlyViewed = [] }) => {
    return (
        <><section
            className="smarq-hub__section"
            aria-labelledby="recently-viewed-heading"
        >
            <h2 id="recently-viewed-heading" className="smarq-hub__section-title">
                Recently Viewed
            </h2>

            <div className="smarq-scroll-row__track" role="list" aria-label="Recently viewed projects">
                {recentlyViewed?.length > 0 ? (
                    recentlyViewed?.map((project) => (
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
        </section></>
    )
}



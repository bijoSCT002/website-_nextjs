import React from "react";
import { ProjectCard } from "./ProjectCard";
import { CreateProjectCard } from "./CreateProjectCard";

export const ProjectList = ({ projects = [], recentIds = [] }) => {
    const mid = Math.ceil(projects.length / 2);
    const row1Projects = projects.slice(0, mid);
    const row2Projects = projects.slice(mid);
    return (
        <><section
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
        </section></>
    )
}



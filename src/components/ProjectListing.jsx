import React from "react";

const ProjectListing = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div className="project" key={project.title}>
          <div className="project-info">
            <h2>
              <a
                className="project-link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-title">{project.title}</div>
              </a>
            </h2>
            <p>{project.description}</p>
          </div>
          <div className="button-list">
            <a
              className="button"
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            {project.path && (
              <a
                className="button"
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListing;

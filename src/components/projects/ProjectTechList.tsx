import React from "react";

interface ProjectTechListProps {
  technologies: string[];
}

const ProjectTechList: React.FC<ProjectTechListProps> = ({ technologies }) => (
  <div className="mb-4">
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-slate-100 dark:bg-gray-600 text-slate-700 dark:text-gray-300 rounded text-xs font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectTechList;

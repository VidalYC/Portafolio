import React from "react";
import { ProjectProps } from "../../types/project";
import ProjectImage from "./ProjectImage";
import ProjectTechList from "./ProjectTechList";
import ProjectLinks from "./ProjectLinks";

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  icon: Icon,
  demo,
  github,
  category,
  hasLiveDemo,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group max-h-[340px] hover:max-h-[600px]">
      <ProjectImage 
        image={image} 
        title={title} 
        category={category} 
        Icon={Icon}
        hasLiveDemo={hasLiveDemo}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:line-clamp-none line-clamp-3 transition-all duration-300">
          {description}
        </p>
        <ProjectTechList technologies={technologies} />
        <ProjectLinks demo={demo} github={github} hasLiveDemo={hasLiveDemo} />
      </div>
    </div>
  );
};

export default ProjectCard;
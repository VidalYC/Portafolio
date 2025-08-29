import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ElementType;
  demo: string;
  github: string;
  category: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  icon: Icon,
  demo,
  github,
  category,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group max-h-[340px] hover:max-h-[600px]">
      {/* Imagen */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:line-clamp-none line-clamp-3 transition-all duration-300">
          {description}
        </p>

        {/* Tecnologías */}
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

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={demo}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Demo</span>
          </a>
          <a
            href={github}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Código</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLinksProps {
  demo?: string;
  github: string;
  hasLiveDemo: boolean;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ demo, github, hasLiveDemo }) => {
  return (
    <div className="flex space-x-4">
      {hasLiveDemo && demo ? (
        <>
          {/* Botón Demo - Solo si hay demo en vivo */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Demo</span>
          </a>
          {/* Botón Código - Separado cuando hay demo */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Código</span>
          </a>
        </>
      ) : (
        /* Botón único "Ver Proyecto" cuando no hay demo */
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Github size={16} />
          <span className="text-sm font-medium">Ver Proyecto</span>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
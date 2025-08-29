import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLinksProps {
  demo: string;
  github: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ demo, github }) => (
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
);

export default ProjectLinks;

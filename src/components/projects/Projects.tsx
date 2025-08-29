import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hooks/useProjects";
import { fallbackImages, projectDemos, manualData } from "../../config/projectsConfig";

const Projects: React.FC = () => {
  const { projects, loading } = useProjects();

  const getProjectImage = (name: string) =>
    fallbackImages[name] || "/projects/default.png";

  const getProjectDemo = (name: string) => projectDemos[name];

  const hasLiveDemo = (name: string) => Boolean(projectDemos[name]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {loading ? (
          <div className="text-center text-lg">Cargando proyectos...</div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={manualData[project.name]?.title || project.name}
                description={project.description ?? "Sin descripción"}
                image={getProjectImage(project.name)}
                technologies={project.technologies || [project.language || "No especificado"]}
                icon={() => <></>}
                demo={getProjectDemo(project.name)}
                github={project.html_url}
                category={project.owner.login === "VidalYC" ? "Personal" : "Educativo"}
                hasLiveDemo={hasLiveDemo(project.name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
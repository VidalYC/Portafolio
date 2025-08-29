import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const REPOS = [
  { owner: "VidalYC", name: "TrinoLab" },
  { owner: "VidalYC", name: "Hackaton_2025" },
  { owner: "VidalYC", name: "Gestor_de_Tareas" }
  // FinancyBank se agrega manualmente abajo
];

type RepoInfo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  owner: { login: string };
  topics?: string[];
  technologies?: string[];
};

const fallbackImages: Record<string, string> = {
  "TrinoLab": "/public/trino.png",
  "Hackaton_2025": "/public/hackton.png",
  "FinancyBank": "/public/bank.jpg",
  "Gestor_de_Tareas": "/public/gestor.png",
};

const manualData: Record<string, Partial<RepoInfo>> = {
  TrinoLab: {
    description: "Laboratorio de integración y manipulación de datos usando JavaScript para procesar, visualizar y exportar información entre diferentes fuentes.",
    technologies: ["JavaScript", "Docker"]
  },
  Hackaton_2025: {
    description: "Proyecto desarrollado para Hackaton 2025, incluye funcionalidades web y machine learning, integración entre frontend y backend con TypeScript y Python.",
    technologies: ["TypeScript", "Python", "JavaScript", "React", "FastAPI"]
  },
  Gestor_de_Tareas: {
    description: "Aplicación web para la gestión de tareas y proyectos colaborativos, con frontend en Vue y backend en Python. Permite crear, editar, y visualizar tareas en tiempo real.",
    technologies: ["Vue", "Python", "JavaScript", "HTML", "Mako"]
  }
};

const financyBankManual: RepoInfo = {
  id: 999999,
  name: "FinancyBank",
  description: "Aplicación para gestión financiera personal y bancaria, desarrollada en Flutter/Dart. Incluye manejo de cuentas, presupuestos y visualizaciones modernas.",
  html_url: "https://github.com/aluciacastro/FinancyBank",
  language: "Dart",
  owner: { login: "aluciacastro" },
  topics: ["Flutter", "Dart", "Finanzas"],
  technologies: ["Dart", "Flutter", "C++", "CMake", "Swift", "C"]
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<RepoInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async (owner: string, name: string): Promise<RepoInfo | null> => {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${name}`);
        if (!res.ok) return null;
        const apiData = await res.json();
        // Merge manualData
        const manual = manualData[name] || {};
        return {
          ...apiData,
          description: manual.description ?? apiData.description ?? "Sin descripción",
          technologies: manual.technologies ?? [apiData.language || "No especificado"],
        };
      } catch {
        return null;
      }
    };

    const fetchAll = async () => {
      const results = await Promise.all(REPOS.map(r => fetchRepo(r.owner, r.name)));
      const publicProjects = results.filter(Boolean) as RepoInfo[];
      setProjects([...publicProjects, financyBankManual]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  // Usa una imagen por defecto si no existe la del proyecto
  const getProjectImage = (name: string) =>
    fallbackImages[name] || "/projects/default.png";

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
                title={project.name}
                description={project.description ?? "Sin descripción"}
                image={getProjectImage(project.name)}
                technologies={project.technologies || [project.language || "No especificado"]}
                icon={() => <></>}
                demo={project.html_url}
                github={project.html_url}
                category={project.owner.login === "VidalYC" ? "Personal" : "Educativo"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
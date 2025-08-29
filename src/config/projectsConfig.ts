import { RepoInfo } from "../types/project";

export const REPOS = [
  { owner: "VidalYC", name: "TrinoLab" },
  { owner: "VidalYC", name: "Hackaton_2025" },
  { owner: "VidalYC", name: "Gestor_de_Tareas" }
  // FinancyBank se agrega manualmente abajo
];

export const fallbackImages: Record<string, string> = {
  TrinoLab: "/public/trino.png",
  Hackaton_2025: "/public/hackton.png",
  FinancyBank: "/public/bank.jpg",
  Gestor_de_Tareas: "/public/gestor.png",
};

export const manualData: Record<string, Partial<RepoInfo>> = {
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

export const financyBankManual: RepoInfo = {
  id: 999999,
  name: "FinancyBank",
  description: "Aplicación para gestión financiera personal y bancaria, desarrollada en Flutter/Dart. Incluye manejo de cuentas, presupuestos y visualizaciones modernas.",
  html_url: "https://github.com/aluciacastro/FinancyBank",
  language: "Dart",
  owner: { login: "aluciacastro" },
  topics: ["Flutter", "Dart", "Finanzas"],
  technologies: ["Dart", "Flutter", "C++", "CMake", "Swift", "C"]
};

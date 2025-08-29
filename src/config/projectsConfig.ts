import { RepoInfo } from "../types/project";

export const REPOS = [
  { owner: "VidalYC", name: "TrinoLab" },
  { owner: "VidalYC", name: "Hackaton_2025" },
  { owner: "VidalYC", name: "Gestor_de_Tareas" },
  { owner: "VidalYC", name: "frontend" },
  // FinancyBank se agrega manualmente abajo
];

export const fallbackImages: Record<string, string> = {
  TrinoLab: "/trino.png",
  Hackaton_2025: "/Hackton.png",
  FinancyBank: "/bank.jpg",
  Gestor_de_Tareas: "/gestor.png",
  frontend: "/salon.png",
};

// URLs de demos desplegados en Vercel
export const projectDemos: Record<string, string> = {
  "Gestor_de_Tareas": "https://gestor-de-tareas-zeta.vercel.app",
  "frontend": "https://frontend-alpha-rust.vercel.app",
  "Hackaton_2025": "https://energy-analitics-2025.vercel.app",
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
    title: "Gestor de Tareas",
    description: "Aplicación web para la gestión de tareas y proyectos colaborativos, con frontend en Vue y backend en Python. Permite crear, editar, y visualizar tareas en tiempo real.",
    technologies: ["Vue", "Python", "JavaScript", "HTML", "Mako"]
  },
  frontend: {
    title: "Salon de Belleza",
    description: "Frontend modular desarrollado con Vue y JavaScript. Incluye múltiples vistas, componentes reutilizables y arquitectura escalable para gestión de servicios de belleza.",
    technologies: ["Vue", "JavaScript"]
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
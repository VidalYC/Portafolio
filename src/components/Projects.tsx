import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Brain, Cloud } from 'lucide-react';

// Componente de fondo animado
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {/* Círculos grandes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-100/20 dark:bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-100/20 dark:bg-purple-500/10 rounded-full animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-green-100/20 dark:bg-green-500/10 rounded-full animate-float-fast delay-2000"></div>
        
        {/* Círculos medianos */}
        <div className="absolute top-1/6 right-1/3 w-16 h-16 bg-cyan-100/25 dark:bg-cyan-500/15 rounded-full animate-float-medium delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-pink-100/25 dark:bg-pink-500/15 rounded-full animate-float-slow delay-1500"></div>
        <div className="absolute top-2/3 left-1/5 w-14 h-14 bg-indigo-100/25 dark:bg-indigo-500/15 rounded-full animate-float-fast"></div>
        
        {/* Círculos pequeños */}
        <div className="absolute top-1/8 left-2/3 w-8 h-8 bg-yellow-100/30 dark:bg-yellow-500/20 rounded-full animate-float-fast delay-700"></div>
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-red-100/30 dark:bg-red-500/20 rounded-full animate-float-medium delay-1200"></div>
        <div className="absolute top-3/5 left-1/8 w-10 h-10 bg-emerald-100/30 dark:bg-emerald-500/20 rounded-full animate-float-slow delay-1800"></div>
        
        {/* Formas geométricas */}
        <div className="absolute top-1/3 left-3/4 w-6 h-6 bg-blue-200/40 dark:bg-blue-400/25 transform rotate-45 animate-float-medium delay-300"></div>
        <div className="absolute bottom-1/6 left-1/2 w-4 h-4 bg-purple-200/40 dark:bg-purple-400/25 transform rotate-45 animate-float-fast delay-900"></div>
        <div className="absolute top-4/5 right-2/3 w-5 h-5 bg-green-200/40 dark:bg-green-400/25 transform rotate-45 animate-float-slow delay-1600"></div>
        
        {/* Líneas flotantes */}
        <div className="absolute top-1/5 left-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-400/30 animate-drift-horizontal"></div>
        <div className="absolute bottom-1/5 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent dark:via-purple-400/30 animate-drift-horizontal delay-1000"></div>
        <div className="absolute top-2/5 right-1/6 h-20 w-0.5 bg-gradient-to-b from-transparent via-green-300/40 to-transparent dark:via-green-400/30 animate-drift-vertical delay-1500"></div>
        
        {/* Puntos brillantes */}
        <div className="absolute top-1/8 left-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-300/40 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/8 right-1/3 w-1.5 h-1.5 bg-purple-400/60 dark:bg-purple-300/40 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute top-3/4 left-3/5 w-1 h-1 bg-green-400/60 dark:bg-green-300/40 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-1/2 left-4/5 w-2 h-2 bg-yellow-400/60 dark:bg-yellow-300/40 rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute bottom-2/5 left-1/6 w-1.5 h-1.5 bg-pink-400/60 dark:bg-pink-300/40 rounded-full animate-twinkle delay-2000"></div>
      </div>
      
      {/* Efecto de malla sutil */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(15px) rotate(120deg); }
          66% { transform: translateY(-25px) translateX(-10px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(20px) rotate(180deg); }
        }
        
        @keyframes drift-horizontal {
          0%, 100% { transform: translateX(-10px) opacity(0); }
          50% { transform: translateX(10px) opacity(1); }
        }
        
        @keyframes drift-vertical {
          0%, 100% { transform: translateY(-10px) opacity(0); }
          50% { transform: translateY(10px) opacity(1); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-drift-horizontal { animation: drift-horizontal 10s ease-in-out infinite; }
        .animate-drift-vertical { animation: drift-vertical 12s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1600 { animation-delay: 1.6s; }
        .delay-1800 { animation-delay: 1.8s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pipeline de Datos E-commerce en GCP",
      description: "Sistema completo de ETL que procesa millones de transacciones diarias usando Cloud Dataflow, BigQuery y Pub/Sub para análisis en tiempo real.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Google Cloud Platform", "Apache Beam", "BigQuery", "Cloud Dataflow", "Python"],
      icon: Cloud,
      demo: "#",
      github: "#",
      category: "Data Engineering"
    },
    {
      id: 2,
      title: "Dashboard Ejecutivo de Ventas",
      description: "Dashboard interactivo en Power BI con KPIs dinámicos, análisis de tendencias y predicciones de ventas conectado a múltiples fuentes de datos.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Power BI", "SQL Server", "DAX", "Power Query", "Azure"],
      icon: BarChart3,
      demo: "#",
      github: "#",
      category: "Business Intelligence"
    },
    {
      id: 3,
      title: "Modelo de Predicción de Churn",
      description: "Sistema de machine learning usando PySpark para predecir la deserción de clientes con 94% de precisión, deployado en cluster Databricks.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["PySpark", "MLlib", "Databricks", "Apache Kafka", "Python"],
      icon: Brain,
      demo: "#",
      github: "#",
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "Data Warehouse Multidimensional",
      description: "Arquitectura de almacén de datos con modelo estrella optimizado, procesos ETL automatizados y cubos OLAP para análisis histórico.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["SQL Server", "SSIS", "SSAS", "T-SQL", "Power BI"],
      icon: Database,
      demo: "#",
      github: "#",
      category: "Data Warehousing"
    },
    {
      id: 5,
      title: "Streaming Analytics Platform",
      description: "Plataforma de análisis en tiempo real procesando eventos de IoT usando Kafka, Spark Streaming y visualizaciones en Grafana.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Apache Kafka", "Spark Streaming", "InfluxDB", "Grafana", "Docker"],
      icon: Cloud,
      demo: "#",
      github: "#",
      category: "Real-time Analytics"
    },
    {
      id: 6,
      title: "Migration to Snowflake",
      description: "Migración completa de data warehouse legacy a Snowflake con optimización de performance y reducción del 40% en costos operativos.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Snowflake", "dbt", "Airflow", "Python", "SQL"],
      icon: Database,
      demo: "#",
      github: "#",
      category: "Cloud Migration"
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Recientes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-white/50 dark:border-gray-600/50"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
                    <project.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100/80 dark:bg-gray-600/80 backdrop-blur-sm text-slate-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
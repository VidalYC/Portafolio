import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Brain, Cloud } from 'lucide-react';

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en ingeniería de datos, 
            business intelligence y soluciones cloud escalables
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
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
                        className="px-2 py-1 bg-slate-100 dark:bg-gray-600 text-slate-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Interesado en ver más proyectos o discutir una colaboración?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Hablemos de tu proyecto</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
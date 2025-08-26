import React from 'react';
import { Database, BarChart3, Cloud, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "ETL & Data Warehousing",
      description: "Diseño e implementación de pipelines robustos de datos"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Dashboards y reportes estratégicos para toma de decisiones"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Soluciones escalables en GCP, AWS y Azure"
    },
    {
      icon: Code,
      title: "Data Science",
      description: "Análisis predictivo y machine learning aplicado"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Soy un Ingeniero de Datos con más de <strong>5 años de experiencia</strong> 
              especializándome en la construcción de arquitecturas de datos escalables 
              y soluciones de Business Intelligence que impulsan la toma de decisiones estratégicas.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mi formación en <strong>Ingeniería de Sistemas</strong> y mis certificaciones en 
              plataformas cloud me han permitido liderar proyectos de migración de datos, 
              implementar data lakes modernos y crear dashboards interactivos que transforman 
              datos complejos en insights accionables.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Me apasiona el ecosistema de datos moderno, desde la ingesta y transformación 
              hasta la visualización y análisis predictivo. Constantemente exploro nuevas 
              tecnologías como <strong>Apache Spark, Kafka, Trino</strong> y herramientas 
              cloud-native para optimizar el rendimiento y escalabilidad de las soluciones.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Áreas de Especialización:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'ETL/ELT', 'Data Warehousing', 'Big Data', 'Cloud Migration',
                  'BI Dashboards', 'Data Modeling', 'Python/SQL', 'Apache Spark'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
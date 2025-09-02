import React from "react";
import { technologies } from "./Data";
import { TechBand } from "./TechBand";
import { CompetencyCard } from "./CompetencyCard";
import "./animations.css";
import { Code, PieChart, Workflow, Zap, Cloud, Database } from "lucide-react";

const TechStack = () => {
  // Reorganización
  const band1 = [
    ...technologies["Lenguajes"],
    ...technologies["Databases"],
    ...technologies["Cloud Platforms"],
  ];

  const band2 = [
    ...technologies["Big Data & Streaming"],
    ...technologies["Microsoft Stack"],
    ...technologies["BI & Visualization"],
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stack Tecnológico
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones de datos robustas y escalables
          </p>
        </div>

        {/* Bandas */}
        <div className="space-y-2 mb-16">
          <TechBand techs={band1} direction="left" speed="medium" />
          <TechBand techs={band2} direction="right" speed="medium" />
        </div>

        {/* Competencias */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <CompetencyCard
              items={[
                { skill: "Python & SQL", percentage: 65, icon: Code },
                { skill: "Power BI & Visualización", percentage: 70, icon: PieChart },
                { skill: "ETL/ELT Pipelines", percentage: 50, icon: Workflow },
              ]}
            />
            <CompetencyCard
              items={[
                { skill: "Apache Spark & Big Data", percentage:60, icon: Zap },
                { skill: "Cloud Platforms (GCP/AWS)", percentage: 50, icon: Cloud },
                { skill: "Data Modeling", percentage: 55, icon: Database },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

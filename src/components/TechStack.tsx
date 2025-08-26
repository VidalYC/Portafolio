import React from 'react';

const TechStack = () => {
  const technologies = {
    "Lenguajes": [
      { name: "Python", color: "bg-yellow-500" },
      { name: "SQL", color: "bg-blue-600" },
      { name: "R", color: "bg-blue-700" },
      { name: "Scala", color: "bg-red-600" }
    ],
    "Big Data & Streaming": [
      { name: "Apache Spark", color: "bg-orange-500" },
      { name: "Apache Kafka", color: "bg-gray-800" },
      { name: "Trino/Presto", color: "bg-purple-600" },
      { name: "Hadoop", color: "bg-yellow-600" }
    ],
    "Cloud Platforms": [
      { name: "Google Cloud Platform", color: "bg-blue-500" },
      { name: "Amazon AWS", color: "bg-orange-400" },
      { name: "Microsoft Azure", color: "bg-blue-700" },
      { name: "Snowflake", color: "bg-blue-400" }
    ],
    "BI & Visualization": [
      { name: "Power BI", color: "bg-yellow-500" },
      { name: "Looker Studio", color: "bg-blue-500" },
      { name: "QlikSense", color: "bg-green-600" },
      { name: "Tableau", color: "bg-blue-600" }
    ],
    "Databases": [
      { name: "PostgreSQL", color: "bg-blue-700" },
      { name: "Oracle", color: "bg-red-600" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Redis", color: "bg-red-500" }
    ],
    "Microsoft Stack": [
      { name: "SSIS", color: "bg-blue-600" },
      { name: "SSAS", color: "bg-blue-700" },
      { name: "SSRS", color: "bg-blue-800" },
      { name: "SQL Server", color: "bg-red-700" }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stack Tecnológico
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones de datos robustas y escalables
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-gray-700 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-110 transition-transform duration-200`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Nivel de Competencia
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { skill: "Python & SQL", level: 95 },
              { skill: "Apache Spark & Big Data", level: 90 },
              { skill: "Cloud Platforms (GCP/AWS)", level: 85 },
              { skill: "Power BI & Data Visualization", level: 92 },
              { skill: "ETL/ELT Pipelines", level: 88 },
              { skill: "Data Modeling", level: 87 }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">{item.skill}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import { 
  Database, Cloud, BarChart3, Code, Server, 
  Cpu, Zap, Globe, Monitor, FileSpreadsheet,
  GitBranch, Layers, Search, Activity, Package,
  Workflow, HardDrive, LineChart, PieChart
} from 'lucide-react';

const TechStack = () => {
  const technologies = {
    "Lenguajes": [
      { name: "Python", color: "text-yellow-500", icon: Code },
      { name: "SQL", color: "text-blue-600", icon: Database }
    ],
    "Big Data & Streaming": [
      { name: "Apache Spark", color: "text-orange-500", icon: Zap },
      { name: "Apache Kafka", color: "text-gray-800", icon: Activity },
      { name: "Trino/Presto", color: "text-purple-600", icon: Search },
      { name: "Hadoop", color: "text-yellow-600", icon: Server }
    ],
    "Cloud Platforms": [
      { name: "Google Cloud Platform", color: "text-blue-500", icon: Cloud },
      { name: "Amazon AWS", color: "text-orange-400", icon: Cloud }
    ],
    "BI & Visualization": [
      { name: "Power BI", color: "text-yellow-500", icon: PieChart },
      { name: "Looker Studio", color: "text-blue-500", icon: LineChart }
    ],
    "Databases": [
      { name: "PostgreSQL", color: "text-blue-700", icon: Database },
      { name: "Oracle", color: "text-red-600", icon: Database },
      { name: "MongoDB", color: "text-green-600", icon: Database }
    ],
    "Microsoft Stack": [
      { name: "SSIS", color: "text-blue-600", icon: Workflow },
      { name: "SSAS", color: "text-blue-700", icon: Cpu },
      { name: "SSRS", color: "text-blue-800", icon: FileSpreadsheet },
      { name: "SQL Server", color: "text-red-700", icon: Database }
    ]
  };

  // Redistribuimos las tecnologías en 3 bandas más equilibradas
  const allTechnologies = Object.values(technologies).flat();
  
  // Banda 1: Lenguajes + Cloud (4 items)
  const band1 = [
    ...technologies["Lenguajes"], 
    ...technologies["Databases"],
    ...technologies["Cloud Platforms"]
  ];
  
  // Banda 2: Big Data + BI (6 items)
  const band2 = [
    ...technologies["Big Data & Streaming"], 
    ...technologies["Microsoft Stack"],
    ...technologies["BI & Visualization"]
  ];

  const TechBand = ({ 
    techs, 
    direction = 'left', 
    speed = 'slow' 
  }: { 
    techs: Array<{name: string; color: string; icon: any}>;
    direction?: 'left' | 'right';
    speed?: 'slow' | 'medium' | 'fast';
  }) => {
    const speedClass = speed === 'fast' ? 'animate-scroll-fast' : speed === 'medium' ? 'animate-scroll-medium' : 'animate-scroll-slow';
    const directionClass = direction === 'right' ? 'animate-scroll-reverse' : '';
    
    return (
      <div className="relative overflow-hidden py-3">
        {/* Efecto de desvanecimiento en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-900 z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-900 z-10"></div>
        
        <div className={`flex space-x-8 whitespace-nowrap ${speedClass} ${directionClass}`}>
          {/* Duplicamos las tecnologías para crear el loop infinito */}
          {[...techs, ...techs, ...techs].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl"
              >
                <IconComponent className={`w-5 h-5 ${tech.color}`} />
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
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

        {/* Bandas animadas */}
        <div className="space-y-2 mb-16">
          <TechBand techs={band1} direction="left" speed="medium" />
          <TechBand techs={band2} direction="right" speed="medium" />
        </div>

        {/* Competency Levels */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nivel de Competencia
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mi experiencia y dominio en las principales tecnologías que utilizo
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Tarjeta 1: Core Skills */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                
                <div className="space-y-6">
                  {[
                    { skill: "Python & SQL", percentage: 85, icon: Code },
                    { skill: "Power BI & Visualización", percentage: 90, icon: PieChart },
                    { skill: "ETL/ELT Pipelines", percentage: 75, icon: Workflow }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {item.skill}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarjeta 2: Advanced Skills */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                
                <div className="space-y-6">
                  {[
                    { skill: "Apache Spark & Big Data", percentage: 70, icon: Zap },
                    { skill: "Cloud Platforms (GCP/AWS)", percentage: 75, icon: Cloud },
                    { skill: "Data Modeling", percentage: 80, icon: Database }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {item.skill}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS para las animaciones */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-slow {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-medium {
          animation: scroll-left 45s linear infinite;
        }

        .animate-scroll-fast {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-right 45s linear infinite;
        }

        /* Pausar animación al hover para mejor UX */
        .animate-scroll-slow:hover,
        .animate-scroll-medium:hover,
        .animate-scroll-fast:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
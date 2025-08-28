import React from 'react';
import { 
  Database, Cloud, BarChart3, Code, Server, 
  Cpu, Zap, Globe, Monitor, FileSpreadsheet,
  GitBranch, Layers, Search, Activity, Package,
  Workflow, HardDrive, LineChart, PieChart
} from 'lucide-react';

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
    <section id="skills" className="relative py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                
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
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                
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
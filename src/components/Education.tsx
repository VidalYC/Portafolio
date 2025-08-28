import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink, Medal, Trophy, Star, Crown } from 'lucide-react';

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

const Education = () => {
  const education = [
    {
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Popular del Cesar",
      year: "2015 - Actualidad",
      description: "Enfoque en desarrollo de software, bases de datos y arquitecturas distribuidas",
      grade: "Magna Cum Laude"
    }
  ];

  const certifications = [
    {
      name: "Database Programming with SQL",
      issuer: "Oracle Academy",
      year: "2022",
      date: "20 Octubre 2022",
      icon: Award,
      color: "from-red-500 to-red-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      link: "#"
    },
    {
      name: "Database Foundations",
      issuer: "Oracle Academy", 
      year: "2022",
      date: "22 Septiembre 2022",
      icon: Medal,
      color: "from-red-500 to-red-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      link: "#"
    },
    {
      name: "Database Programming with PL/SQL",
      issuer: "Oracle Academy",
      year: "2022", 
      date: "26 Noviembre 2022",
      icon: Trophy,
      color: "from-red-500 to-red-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      link: "#"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2024",
      date: "31 Octubre 2024",
      icon: Star,
      color: "from-blue-500 to-blue-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg",
      link: "#"
    },
    {
      name: "Acelerador de Carrera con Power BI",
      issuer: "ZAKIDATA",
      year: "2024",
      date: "28 Noviembre 2024",
      hours: "8 horas",
      icon: Crown,
      color: "from-yellow-500 to-yellow-600",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      link: "#"
    },
    {
      name: "Atención al Cliente por Medios Tecnológicos",
      issuer: "SENA",
      year: "2025",
      date: "14 Marzo 2025",
      hours: "48 horas",
      icon: Medal,
      color: "from-green-500 to-green-600",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-SENA.svg/1200px-Escudo-SENA.svg.png",
      link: "#"
    }
  ];

  const continuousLearning = [
    {
      course: "Advanced Data Engineering on GCP",
      platform: "Coursera",
      year: "2024",
      hours: "40 horas"
    },
    {
      course: "MLOps for Production Machine Learning",
      platform: "edX",
      year: "2024",
      hours: "60 horas"
    },
    {
      course: "Real-time Stream Processing",
      platform: "Udacity",
      year: "2023",
      hours: "80 horas"
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Educación y Certificaciones
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Formación académica sólida complementada con certificaciones industriales 
            y aprendizaje continuo en tecnologías emergentes
          </p>
        </div>

        {/* Academic Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Formación Académica
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50 dark:border-gray-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.year}
                    </span>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm mt-1">{item.grade}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Certificaciones Profesionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 dark:border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <p className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </p>
                      {cert.hours && (
                        <p className="text-green-600 dark:text-green-400 font-medium">
                          Duración: {cert.hours}
                        </p>
                      )}
                    </div>
                    <a
                      href={cert.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Ver credencial
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Certificaciones Obtenidas</div>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-300">Organizaciones Certificadoras</div>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Horas de Formación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
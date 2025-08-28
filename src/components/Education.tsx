
import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink, Medal, Trophy, Star, Crown } from 'lucide-react';

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
    <section id="education" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Certificaciones Obtenidas</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-300">Organizaciones Certificadoras</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Horas de Formación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

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
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      badge: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      link: "#"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      badge: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      link: "#"
    },
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      year: "2022",
      badge: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      link: "#"
    },
    {
      name: "Snowflake SnowPro Core Certification",
      issuer: "Snowflake",
      year: "2024",
      badge: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      link: "#"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2023",
      badge: "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      link: "#"
    },
    {
      name: "Apache Spark Developer Certification",
      issuer: "Databricks",
      year: "2022",
      badge: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 dark:from-blue-400 dark:to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.year}</p>
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

        {/* Continuous Learning */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Aprendizaje Continuo
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              {continuousLearning.map((course, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {course.course}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {course.platform}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{course.year}</span>
                    <span>{course.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
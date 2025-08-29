import { Award, Calendar, ExternalLink } from "lucide-react";
import { certifications } from "./educationData";

const Certifications = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
        <Award className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
        Certificaciones Profesionales
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
              >
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
  );
};

export default Certifications;

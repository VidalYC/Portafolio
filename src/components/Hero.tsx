import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Simulación de descarga de CV
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'CV_Ingeniero_Datos.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            <img src="/prins.png" alt="Yoriel Carvajalino" className="w-32 h-32 rounded-full" />
          </div>
        </div>

        {/* Name and Titles */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Yoriel Carvajalino
        </h1>
        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <p>Ingeniero de Datos</p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-0.5 bg-blue-600 mr-3"></div>
            <span className="text-blue-600 font-medium">|</span>
            <div className="w-12 h-0.5 bg-blue-600 ml-3"></div>
          </div>
          <p>Especialista en Business Intelligence</p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transformando datos en insights accionables a través de soluciones innovadoras 
          de ETL, Data Warehousing y visualización avanzada en plataformas cloud.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Download size={20} />
            <span>Descargar CV</span>
          </button>
          <a
            href="mailto:juan.perez@email.com"
            className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Mail size={20} />
            <span>Contactar</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="www.linkedin.com/in/yoriel-carvajalino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/VidalYC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:yorielvidal@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
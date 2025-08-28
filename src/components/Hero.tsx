import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Kb1dzbOli2npQ52kdhbbXcvxp4b-B0ze';
    link.download = 'CV_Yoriel_Carvajalino.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            className="flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-[0.375em] rounded-lg font-semibold text-xl transition-all duration-150 ease-in-out cursor-pointer
            shadow-[inset_0_1px_0_0_rgba(59,130,246,0.8),0_1px_0_0_rgba(37,99,235,1),0_2px_0_0_rgba(29,78,216,1),0_4px_0_0_rgba(30,64,175,1),0_5px_0_0_rgba(30,58,138,1),0_6px_0_0_rgba(23,37,84,1),0_7px_0_0_rgba(15,23,42,1),0_7px_8px_0_rgba(51,65,85,0.4)]
            dark:shadow-[inset_0_1px_0_0_rgba(96,165,250,0.8),0_1px_0_0_rgba(59,130,246,1),0_2px_0_0_rgba(37,99,235,1),0_4px_0_0_rgba(29,78,216,1),0_5px_0_0_rgba(30,64,175,1),0_6px_0_0_rgba(30,58,138,1),0_7px_0_0_rgba(23,37,84,1),0_7px_8px_0_rgba(71,85,105,0.4)]
            active:translate-y-[0.225rem]
            active:shadow-[inset_0_0.5px_0_0_rgba(59,130,246,0.8),0_0.5px_0_0_rgba(37,99,235,1),0_1px_0_0_rgba(29,78,216,1),0_2px_0_0_rgba(30,64,175,1),0_2px_0_0_rgba(30,58,138,1),0_3px_0_0_rgba(23,37,84,1),0_3.5px_0_0_rgba(15,23,42,1),0_3.5px_6px_0_rgba(51,65,85,0.4)]
            dark:active:shadow-[inset_0_0.5px_0_0_rgba(96,165,250,0.8),0_0.5px_0_0_rgba(59,130,246,1),0_1px_0_0_rgba(37,99,235,1),0_2px_0_0_rgba(29,78,216,1),0_2px_0_0_rgba(30,64,175,1),0_3px_0_0_rgba(30,58,138,1),0_3.5px_0_0_rgba(23,37,84,1),0_3.5px_6px_0_rgba(71,85,105,0.4)]"
          >
            <Download size={20} />
            <span>Descargar CV</span>
          </button>
          
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/yoriel-carvajalino"
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
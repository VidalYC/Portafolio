import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
import React from 'react';

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

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              🌟 Soy estudiante de Ingeniería de Sistemas <strong>(9.º semestre)</strong> 
              en la Universidad Popular del Cesar, con gran interés y formación 
              en el ecosistema de datos moderno 📊.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              🚀 Me apasiona transformar datos en conocimiento útil, desde la ingesta y 
              transformación hasta la visualización y análisis predictivo 🤖. Durante mi formación 
              he fortalecido mis competencias en programación, bases de datos, BI y herramientas cloud, 
              lo que me ha permitido desarrollar proyectos académicos y personales orientados a la analítica de datos y 
              la inteligencia de negocios.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              💡 Mi objetivo es seguir aprendiendo y crecer como Ingeniero de Datos, 
              aportando soluciones innovadoras que impulsen la toma de decisiones estratégicas en las organizaciones.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Áreas de Especialización:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'ETL/ELT', 'Data Warehousing', 'Big Data', 'Cloud Migration',
                  'BI Dashboards', 'Data Modeling', 'Python/SQL', 'Apache Spark'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative group cursor-pointer"
              style={{
                ['--wave-duration' as any]: '3s',
              }}
            >
              {/* Multiple wave rings with different delays and sizes */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 pointer-events-none animate-wave-1"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/25 opacity-0 group-hover:opacity-100 pointer-events-none animate-wave-2"></div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 opacity-0 group-hover:opacity-100 pointer-events-none animate-wave-3"></div>
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/15 opacity-0 group-hover:opacity-100 pointer-events-none animate-wave-4"></div>
              
              {/* Continuous wave effect even without hover */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-wave-continuous"></div>
              
              {/* Subtle floating shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <img
                  src="/imageme.jpg"
                  alt="Perfil profesional"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* CSS for wave animations */}
              <style>{`
                @keyframes wave-expand {
                  0% {
                    transform: scale(1);
                    opacity: 1;
                  }
                  100% {
                    transform: scale(1.4);
                    opacity: 0;
                  }
                }
                
                @keyframes wave-continuous {
                  0%, 100% {
                    transform: scale(1);
                    opacity: 0.1;
                  }
                  50% {
                    transform: scale(1.1);
                    opacity: 0.3;
                  }
                }
                
                .animate-wave-1 {
                  animation: wave-expand 2s ease-out infinite;
                  animation-delay: 0s;
                }
                
                .animate-wave-2 {
                  animation: wave-expand 2s ease-out infinite;
                  animation-delay: 0.5s;
                }
                
                .animate-wave-3 {
                  animation: wave-expand 2s ease-out infinite;
                  animation-delay: 1s;
                }
                
                .animate-wave-4 {
                  animation: wave-expand 2s ease-out infinite;
                  animation-delay: 1.5s;
                }
                
                .animate-wave-continuous {
                  animation: wave-continuous 4s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
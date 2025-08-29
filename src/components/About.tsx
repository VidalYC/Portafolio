import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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